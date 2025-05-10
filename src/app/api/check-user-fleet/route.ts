import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/app/api/verify-access-token";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
      const authHeader = req.headers.get("authorization") || "";
  
      const { valid, response } = await verifyAccessToken(authHeader);
  
      if (!valid) {
        return response;
      }
  
      const { searchParams } = new URL(req.url);
      const email = searchParams.get("email");
  
      if (!email) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
      }
  
      const user = await prisma.users.findUnique({
        where: { email },
        select: { id: true, fleetId: true },
      });
  
      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
  
      const isFleetConnected = !!user.fleetId;
  
      return NextResponse.json({
        fleetConnected: isFleetConnected,
      });
  
    } catch (error) {
      console.error("Error checking fleet association:", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }
  
