import { prisma } from "@/lib/prisma.js";
import Image from "next/image.js";

export default async function SaveProfileImg({ user, avatar, selectedAvatar }) {
  //console.log(setSelectedAvatar(avatar));

  try {
    //request to the API to update the user's avatar
    const response = await fetch("/api/updateAvatar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        selectedAvatar: avatar,
      }),
    });
    console.log(selectedAvatar);

    if (response.ok) {
    } else {
      console.error("Error updating avatar:", response.message);
    }
  } catch (error) {
    console.error("Error updating avatar:", error);
  }

  return (
    <div>
      <p>Image</p>
    </div>
  );
}

//<Image src={user.newAvatar} alt="Avatar Image" />{" "}
