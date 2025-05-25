
"use server";

import { prisma } from "@/lib/prisma";
import { Truck } from  "@/lib/models";
// import { TruckStatus } from "@/lib/enums";

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
        fleetId: fleetId
      },
    });
    return result;
  } catch (error) {
    console.error("Error creating truck:", error);
    throw error;
  }
};



export const getTrucksByStatus = async (fleetId: string) => {
  const trucks: Truck[] | null = await getTrucksForFleet(fleetId);
  if (!trucks) {
    return {
      availableTrucks: [],
      underMaintenance: [],
      idleTrucks: [],
      totalTrucks: 0,
    };
  }

  const availableTrucks = trucks.filter(truck => truck.status === "AVAILABLE");
  const underMaintenance = trucks.filter(truck => truck.status === "UNDER_MAINTENANCE");
  const idleTrucks = trucks.filter(truck => truck.status === "IDLE");

  return {
    availableTrucks,
    underMaintenance,
    idleTrucks,
    totalTrucks: trucks.length,
  };
};

export const deleteTruckById = async (id: string) => {
  try {
    const result = await prisma.truck.delete({
      where: {
        id: id
      },
    });
    return result;
  } catch (error) {
    console.error("Error creating truck:", error);
    throw error;
  }
};

export const updateTruckByIdAndFleetId = async (id: string, fleetId: string) => {
  try {
    const result = await prisma.truck.update({
      where: {
        id: id
      },
      data: {
        fleetId: fleetId
      }
    });
    return result;
  } catch (error) {
    console.error("Error creating truck:", error);
    throw error;
  }
};