// app/actions/checkFleetConnection.ts
"use server";

import { prisma } from "@/lib/prisma";
import { OperationalStatus } from "@/generated/prisma";
import { FleetInfo } from "@/lib/models";

export async function checkFleetConnection(email: string) {
  try {
    if (!email) {
      return { error: true, status: 400, message: "Email is required" };
    }

    const user = await prisma.users.findUnique({
      where: { email },
      select: { id: true, fleetId: true },
    });

    if (!user) {
      return { error: true, status: 404, message: "User not found" };
    }

    const isFleetConnected = !!user.fleetId;

    return {
      error: false,
      fleetConnected: isFleetConnected,
      fleetId: isFleetConnected ? user.fleetId : null,
    };
  } catch (error) {
    console.error("Error checking fleet association:", error);
    return { error: true, status: 500, message: "Internal Server Error" };
  }
}

export async function createFleet(data: FleetInfo) {
  try {
    const { fleetName, fleetBaseLocation, operationalStatus } = data;

    if (!fleetName || !fleetBaseLocation) {
      return { error: true, message: "Fleet name and base location are required." };
    }

    // Validate and cast operationalStatus
    const validStatuses = Object.values(OperationalStatus);
    const status = validStatuses.includes(operationalStatus as OperationalStatus)
      ? (operationalStatus as OperationalStatus)
      : OperationalStatus.FULLY_OPERATIONAL;

    const newFleet = await prisma.fleet.create({
      data: {
        fleetName,
        fleetBaseLocation,
        operationalStatus: status,
      },
      select: {
        id: true, // ✅ Only select the ID
      },
    });

    return {
      error: false,
      fleetId: newFleet.id, // ✅ Return only the ID
    };
  } catch (error) {
    console.error("Failed to create fleet:", error);
    return { error: true, message: "Internal Server Error" };
  }
}

export async function getFleetInfoById(fleetId: string): Promise<{
  error: boolean;
  fleetInfo?: FleetInfo;
  message?: string;
}> {
  try {
    if (!fleetId) {
      return { error: true, message: "Fleet ID is required." };
    }

    const fleet = await prisma.fleet.findUnique({
      where: { id: fleetId },
      select: {
        fleetName: true,
        fleetBaseLocation: true,
        operationalStatus: true,
      },
    });

    if (!fleet) {
      return { error: true, message: "Fleet not found." };
    }

    return {
      error: false,
      fleetInfo: {
        fleetName: fleet.fleetName,
        fleetBaseLocation: fleet.fleetBaseLocation,
        operationalStatus: fleet.operationalStatus,
      },
    };
  } catch (error) {
    console.error("Error fetching fleet info:", error);
    return { error: true, message: "Internal Server Error" };
  }
}
