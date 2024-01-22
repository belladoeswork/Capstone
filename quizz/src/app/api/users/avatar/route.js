import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { userId, newAvatar } = req.body;

  try {
    // Use Prisma to update the user's avatar
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { avatar: newAvatar },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating avatar:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
