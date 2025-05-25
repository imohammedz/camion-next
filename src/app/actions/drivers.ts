"use server";

import { Driver } from "@/lib/models";
import { prisma } from "@/lib/prisma";

export const createDriver = async (data: Driver) => {
  try {
    const result = await prisma.driver.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        license: data.license,
        registerId: data.registerId,
        experience: data.experience,
        status: data.status,
        fleetId: data.fleetId,
      }
    });
    return result;
  } catch (error) {
    console.error("Error creating driver:", error);
    throw error;
  }
};


export const getDriversByFleetId = async (fleetId: string) => {
  try {
    const result = await prisma.driver.findMany({
      where: {
        fleetId: fleetId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error creating driver:", error);
    throw error;
  }
};


export const getDriversStatusByFleedId = async(fleetId: string) => {
  try {
    const drivers:Driver[] | null =  await getDriversByFleetId(fleetId);
    if(!drivers) {
      return {
        totalDrivers: 0,
        availableDrivers: [],
       assignedDrivers: []
      }
    }
    const availableDrivers = drivers.filter(driver => driver.status === "AVAILABLE");
    const assignedDrivers = drivers.filter(driver => driver.status === "ASSIGNED");
    return {
      totalDrivers: drivers.length,
      assignedDrivers,
      availableDrivers,
    };
  } catch (error) {
    console.error("No drivers available:", error);
    throw error;
  }
}