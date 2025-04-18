import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.SUPABASE_JWT_SECRET as string;

export function verifyAccessToken(authHeader?: string) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return { valid: false, response: NextResponse.json({ message: "Unauthorized: Missing token" }, { status: 401 }) };
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, response: NextResponse.json({ message: "Unauthorized: Invalid token" }, { status: 401 }) };
  }
}
