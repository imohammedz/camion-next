"use server";

import { CreateUserInput } from "@/lib/models";
import { prisma } from "@/lib/prisma";

export async function createUser(data: CreateUserInput) {
  try {
    const { id, email, firstName, lastName, phoneNumber, role, userName } =
      data;

    if (
      !id ||
      !email ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !role ||
      !userName
    ) {
      return {
        error: true,
        status: 400,
        message: "Missing required fields: id or email",
      };
    }

    const newUser = await prisma.users.create({
      data: {
        id,
        email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        role: role,
        userName: userName,
      },
    });

    return {
      error: false,
      message: "User created successfully",
      user: newUser,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: true, status: 500, message: "Internal Server Error" };
  }
}


export async function getUserIdByEmail(email: string) {
  try {
    if (!email) {
      return { error: true, message: "Email is required." };
    }

    const user = await prisma.users.findUnique({
      where: { email },
      select: { id: true, role:true},
    });

    if (!user) {
      return { error: true, message: "User not found." };
    }

    return { error: false, userId: user.id, userRole:user.role };
  } catch (error) {
    console.error("Error fetching user ID by email:", error);
    return { error: true, message: "Internal Server Error" };
  }
}

export async function getUserIdByFleetId(fleetId: string) {
  try {
    if (!fleetId) {
      return { error: true, message: "fleetId is required." };
    }

    const user = await prisma.users.findFirst({
      where: { fleetId },
      select: { id: true, role: true, firstName:true },
    });

    if (!user) {
      return { error: true, message: "User not found." };
    }

    return { error: false, userDetails:user };
  } catch (error) {
    console.error("Error fetching user by fleetId:", error);
    return { error: true, message: "Internal Server Error" };
  }
}

export async function getUserIdByShipmentId(shipmentId: string) {
  try {
    if (!shipmentId) {
      return { error: true, message: "fleetId is required." };
    }

    const user = await prisma.users.findFirst({
      where: { shipmentId },
      select: { id: true, role: true, firstName:true },
    });

    if (!user) {
      return { error: true, message: "User not found." };
    }

    return { error: false, userDetails:user };
  } catch (error) {
    console.error("Error fetching user by fleetId:", error);
    return { error: true, message: "Internal Server Error" };
  }
}