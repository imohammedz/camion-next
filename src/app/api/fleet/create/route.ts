import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAccessToken } from "@/app/api/verify-access-token";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization") || "";

    const { valid, response, decoded } = verifyAccessToken(authHeader);
    if (!valid) return response;

    // ✅ Extract user email from decoded token
    const userEmail =
      typeof decoded === "object" && "email" in decoded ? decoded.email : null;

    if (!userEmail) {
      return NextResponse.json(
        { success: false, message: "Email not found in token" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { fleetName, fleetBaseLocation, operationalStatus } = body;

    if (!fleetName || !fleetBaseLocation) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Create the fleet
    const newFleet = await prisma.fleet.create({
      data: {
        fleetName,
        fleetBaseLocation,
        operationalStatus: operationalStatus || "FULLY_OPERATIONAL",
      },
    });

    // 2. Associate user with the new fleet
    await prisma.users.update({
      where: { email: userEmail },
      data: { fleetId: newFleet.id },
    });

    return NextResponse.json(
      { success: true, fleet: newFleet },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating fleet:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
