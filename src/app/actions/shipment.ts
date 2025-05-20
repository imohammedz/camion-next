'use server';
import { ShipmentInfo } from "@/lib/models";
import { prisma } from "@/lib/prisma";
import { OperationalStatus } from "@prisma/client";

export async function checkShipmentConnection(email: string) {
   try {
    if (!email) {
      return { error: true, status: 400, message: "Email is required" };
    }

    const user = await prisma.users.findUnique({
      where: { email },
      select: { id: true, shipmentId: true },
    });

    if (!user) {
      return { error: true, status: 404, message: "User not found" };
    }

    const isShipmentConnected = !!user.shipmentId;

    return {
      userId: user.id,
      error: false,
      shipmentConnected: isShipmentConnected,
      shipmentId: isShipmentConnected ? user.shipmentId : null,
    };
  } catch (error) {
    console.error("Error checking fleet association:", error);
    return { error: true, status: 500, message: "Internal Server Error" };
  }
}

export async function getShipmentInfoById(shipmentId: string): Promise<{
  error: boolean;
  shipmentInfo?: ShipmentInfo;
  message?: string;
}> {
  try {
    if (!shipmentId) {
      return { error: true, message: "ShipmentId ID is required." };
    }

    const shipment = await prisma.shipment.findUnique({
      where: { id: shipmentId },
      select: {
        shipmentName: true,
        shipmentBaseLocation: true,
        operationalStatus: true,
      },
    });

    if (!shipment) {
      return { error: true, message: "Shipment not found." };
    }

    return {
      error: false,
      shipmentInfo: {
        shipmentName: shipment.shipmentName,
        shipmentBaseLocation: shipment.shipmentBaseLocation,
        operationalStatus: shipment.operationalStatus,
      },
    };
  } catch (error) {
    console.error("Error fetching fleet info:", error);
    return { error: true, message: "Internal Server Error" };
  }
}

export async function createShipment(data: ShipmentInfo, userId: string | null) {
  try {
    const { shipmentName, shipmentBaseLocation, operationalStatus } = data;

    if (!userId) {
      return { error: true, message: "User ID is required to create a fleet." };
    }

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return { error: true, message: "User not found." };
    }

    if (!shipmentName || !shipmentBaseLocation) {
      return { error: true, message: "Shipment name and base location are required." };
    }

    // Validate and cast operationalStatus
    const validStatuses = Object.values(OperationalStatus);
    const status = validStatuses.includes(operationalStatus as OperationalStatus)
      ? (operationalStatus as OperationalStatus)
      : OperationalStatus.FULLY_OPERATIONAL;

    // Create the fleet
    const newShipment = await prisma.shipment.create({
      data: {
        shipmentName,
        shipmentBaseLocation,
        operationalStatus: status,
      },
      select: {
        id: true,
      },
    });

    // Assign the fleet to the user
    await prisma.users.update({
      where: { id: userId },
      data: { shipmentId: newShipment.id },
    });

    return {
      error: false,
      shipmentId: newShipment.id,
    };
  } catch (error) {
    console.error("Failed to create fleet:", error);
    return { error: true, message: "Internal Server Error" };
  }
}