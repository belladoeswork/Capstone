import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import bcrypt from "bcrypt";
import { cookies } from "next/headers.js";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const cookieStore = cookies();
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({
        success: false,
        error: "You must provide a username and password to register",
      });
    }
    const _user = await prisma.user.findFirst({
      where: { username, password },
    });
    if (_user) {
      return NextResponse.json({
        success: false,
        error: "Username already exists. Please login.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, password: hashedPassword },
    });

    delete user.password;

    const token = jwt.sign(
      { userId: user.id, username },
      process.env.JWT_SECRET
    );
    cookieStore.set("token", token);

    return NextResponse.json({ success: true, user, token });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
