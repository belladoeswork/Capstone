"use client";
import Image from "next/image.js";
import { useState } from "react";

import profileImg1 from "@/assets/avatar/9439685.jpg";
import profileImg2 from "@/assets/avatar/9439833.jpg";
import avatar1 from "@/assets/avatar/av1.jpg";
import avatar2 from "@/assets/avatar/av2.jpg";
import avatar3 from "@/assets/avatar/av3.jpg";
import avatar4 from "@/assets/avatar/av4.jpg";

export default function AvatarOption() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar.src || avatar);
  };
  //console.log("AvatarOption component rendered");

  return (
    <div className="profile-modal">
      <h4 className="modal-header">Choose your Avatar</h4>
      <div className="modal-avatars-container">
        <Image
          src={avatar1}
          alt={"avatar image"}
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar1)}
        />
        <Image
          src={avatar2}
          alt={"avatar image"}
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar2)}
        />
        <Image
          src={avatar3}
          alt={"avatar image"}
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar3)}
        />
        <Image
          src={avatar4}
          alt={"avatar image"}
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar4)}
        />
        <Image
          src={profileImg1}
          alt={"avatar image"}
          className="avatar-images"
          onClick={() => handleAvatarClick(profileImg1)}
        />
        <Image
          src={profileImg2}
          alt={"avatar image"}
          className="avatar-images"
          onClick={() => handleAvatarClick(profileImg2)}
        />
      </div>
    </div>
  );
}
