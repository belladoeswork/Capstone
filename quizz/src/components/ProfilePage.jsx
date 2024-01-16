"use client";
import { fetchUser } from "@/lib/fetchUser";
//import { prisma } from "@/lib/prisma";
import { useState } from "react";
import AvatarOption from "@/components/AvatarOption.jsx";

import { BsFillTrophyFill } from "react-icons/bs";

const avatarOptions = [
  {
    id: 1,
    src: "/public/assets/avatars/9439685.jpg",
    alt: "Avatar 1",
  },
  {
    id: 2,
    src: "/public/assets/avatars/9439833.jpg",
    alt: "Avatar 2",
  },
];

export default function ProfilePage() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarSelect = (avatarId) => {
    const selected = avatarOptions.find((avatar) => avatar.id === avatarId);
    setSelectedAvatar(selected);
  };

  //const user = await fetchUser();
  // {user.badge}
  return (
    <div>
      <h1>Your Profile</h1>

      <BsFillTrophyFill />
      <div className="avatar-options">
        {avatarOptions.map((avatar) => (
          <AvatarOption
            key={avatar.id}
            src={avatar.src}
            alt={avatar.alt}
            onSelect={() => handleAvatarSelect(avatar.id)}
          />
        ))}
      </div>
      {selectedAvatar && (
        <div>
          <h2>Selected Avatar</h2>
          {process.browser && (
            <Image src={selectedAvatar.src} alt={selectedAvatar.alt} />
          )}
        </div>
      )}
    </div>
  );
}
