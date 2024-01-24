import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from "@/lib/fetchUser.js";

//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export async function PUT(request, response) {
  try {
    const { userId } = response.params;

    const { avatar } = await request.json();
    const user = await fetchUser();

    //is user logged in?
    if (!user.id) {
      return NextResponse.json({
        success: false,
        error: "Please log in to change your avatar",
      });
    }
    // Use Prisma to update the user's avatar
    //console.log(userId, avatar);

    const updatedAvatar = await prisma.user.update({
      where: { id: userId },
      data: { avatar: avatar },
    });

    return NextResponse.json({ success: true, updatedAvatar });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
