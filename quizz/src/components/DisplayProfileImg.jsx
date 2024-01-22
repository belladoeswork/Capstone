import { prisma } from "@/lib/prisma.js";
import Image from "next/image.js";

export default async function DisplayProfileImg({
  user,
  avatar,
  selectedAvatar,
  setSelectedAvatar,
}) {
  setSelectedAvatar(avatar);
  console.log(setSelectedAvatar(avatar));

  try {
    //request to the API to update the user's avatar
    const response = await fetch("/api/updateAvatar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        newAvatar: avatar,
      }),
    });

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
      <Image src={user.avatar} alt="Avatar Image" />{" "}
    </div>
  );
}
