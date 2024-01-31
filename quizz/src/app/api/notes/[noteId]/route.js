import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function PUT(request, response) {
  try {
    const { text } = await request.json();
    const { noteId } = response.params;
    const { id } = await fetchUser();

    const searchNote = await prisma.note.findFirst({
      where: {
        id: noteId,
      },
    });

    if (id !== searchNote.userId) {
      return NextResponse.json({
        success: false,
        error: "You cannot edit someone else's note.",
      });
    }

    let note;

    if (text) {
      note = await prisma.note.update({
        where: {
          id: noteId,
        },
        data: {
          text: text,
        },
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "Add text to update.",
      });
    }

    return NextResponse.json({ success: true, note });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function DELETE(request, response) {
  try {
    const { noteId } = response.params;
    const { id } = await fetchUser();

    const searchNote = await prisma.note.findFirst({
      where: {
        id: noteId,
      },
    });

    const deletednote = await prisma.note.delete({
      where: {
        id: noteId,
      },
    });

    return NextResponse.json({ success: true, note: deletednote });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
