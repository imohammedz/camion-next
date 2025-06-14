"use server";

import { prisma } from "@/lib/prisma";
import { Shift } from "@/lib/models";

export async function createShift(data: Shift) {
  try {
    const response = await prisma.shift.create({
      data: {
        type: data.type,
        shiftSalary: data.salary,
        shiftStatus: data.activeAndDeactiveStatus,
        fleetId: data.fleetId,
      },
    });

    if (data.driversIds && data.driversIds.length > 0) {
      await prisma.driver.updateMany({
        where: {
          id: {
            in: data.driversIds,
          },
        },
        data: {
          shiftId: response.id,
        },
      });
    }

    return {
      ...response,
      id: response.id,
      type: response.type,
      salary: response.shiftSalary,
      deactivateShift: !response.shiftStatus,
      assignedDrivers: [],
    };
  } catch (error) {
    console.error("Error creating shift:", error);
    throw new Error("Failed to create shift");
  }
}

export async function getShiftsByFleetId(fleetId: string) {
  try {
    const shifts = await prisma.shift.findMany({
      where: {
        fleetId: fleetId,
      },
      include: {
        drivers: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return shifts.map((shift) => ({
      id: shift.id,
      type: shift.type,
      salary: shift.shiftSalary,
      deactivateShift: !shift.shiftStatus,
      assignedDrivers: shift.drivers.map((driver) => ({
        name: driver.name,
      })),
      fleetId: shift.fleetId,
    }));
  } catch (error) {
    console.error("Error fetching shifts:", error);
    throw new Error("Failed to fetch shifts");
  }
}
