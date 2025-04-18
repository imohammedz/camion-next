// src/app/api/get-users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (user) {
      return NextResponse.json({ exists: true, message: 'User already exists' });
    }

    return NextResponse.json({ exists: false, message: 'Email is available' });
  } catch (error) {
    console.error('Error checking user:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
