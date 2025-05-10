"use server";

import { prisma } from "@/lib/prisma";
import { Truck } from "@/interfaces/truck";

export const createTrucksForFleet = async (data: Truck) => {
  try {
    const result = await prisma.truck.create({
      data: {
        truckModel: data.truckModel,
        registrationNumber: data.registrationNumber,
        manufacturer: data.manufacturer,
        yearOfManufacture: data.yearOfManufacture,
        capacity: data.capacity,
        dimensions: data.dimensions,
        fuelType: data.fuelType,
        mileage: data.mileage,
        status: data.status,
        fleetId: data.fleetId,
        driverId: data.driverId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error creating truck:", error);
    throw error;
  }
};


export const getTrucksForFleet = async (fleetId: string) => {
  try {
    const result = await prisma.truck.findMany({
      where: {
        fleetId: fleetId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error creating truck:", error);
    throw error;
  }
};