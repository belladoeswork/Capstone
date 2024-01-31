import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function GET() {
  const notes = await prisma.note.findMany({});
  return NextResponse.json({ success: true, notes });
}

export async function POST(request, response) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({
        success: false,
        error: "You cannot save an empty note. Add some text.",
      });
    }

    const user = await fetchUser();

    // if (!user.id) {
    //   return NextResponse.json({
    //     success: false,
    //     error: "You must login to create a note!",
    //   });
    // }

    const note = await prisma.note.create({
      data: {
        userId: user.id,
        text,
      },
    });

    return NextResponse.json({ success: true, note });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
