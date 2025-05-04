// /app/api/fleet/get/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAccessToken } from "@/app/api/verify-access-token";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization") || "";
    const { valid, decoded, response } = await verifyAccessToken(authHeader);

    if (!valid) return response;

    // decoded will have user information, assuming you stored email/userId inside token
    const userEmail = typeof decoded === "object" && "email" in decoded ? decoded.email : null;

    if (!userEmail) {
      return NextResponse.json({ message: "Unauthorized: Invalid token payload" }, { status: 401 });
    }

    // 1. Find the user with their fleet
    const user = await prisma.users.findUnique({
      where: { email: userEmail },
      include: { fleet: true }, // bring the related Fleet
    });

    if (!user || !user.fleet) {
      return NextResponse.json({ message: "No fleet found for this user" }, { status: 404 });
    }

    // 2. Return fleetName, fleetBaseLocation, operationalStatus
    const { fleetName, fleetBaseLocation, operationalStatus } = user.fleet;

    return NextResponse.json(
      { fleetName, fleetBaseLocation, operationalStatus },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching fleet:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
