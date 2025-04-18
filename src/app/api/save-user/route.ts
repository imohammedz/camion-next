import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/app/api/verify-access-token";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization") || "";
    const { valid, response } = verifyAccessToken(authHeader);

    if (!valid) {
      return response;
    }

    const body = await req.json();

    const {
      id,
      email,
      firstName,
      lastName,
      phoneNumber,
      role,
      userName,
    } = body;

    if (!id || !email) {
      return NextResponse.json(
        { message: "Missing required fields: id or email" },
        { status: 400 }
      );
    }

    const newUser = await prisma.users.create({
      data: {
        id,
        email,
        firstName: firstName || null,
        lastName: lastName || null,
        phoneNumber: phoneNumber || null,
        role: role || "USER",
        userName: userName || null,
      },
    });

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
