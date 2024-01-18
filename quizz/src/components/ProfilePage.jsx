"use client";
import { fetchUser } from "@/lib/fetchUser";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa6";
import AvatarOption from "./AvatarOption.jsx";

import profileImg1 from "@/assets/avatar/9439685.jpg";

export default function ProfilePage({ user }) {
  const [isModalOpen, setModalOpen] = useState(false);
  //const [avatarProfile, setAvatarProfile] = useState("avatar1");

  //add eventlist to all avatars

  //const user = await fetchUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleEditProfileClick = () => {
    console.log("Button clicked");
    setModalOpen(true);
  };

  return (
    <div className="profile-container">
      <div>
        <Image src={profileImg1} alt={"avatar img"} className="profile-image" />
      </div>
      {user.id && (
        <div>
          <h1 className="user-name">{user.username}</h1>
          <div className="level-indicator">
            <FaTrophy />
            <p>Level:</p>
          </div>
          <div>
            <button
              onClick={handleEditProfileClick}
              className="editProfile-button"
            >
              Change Avatar
            </button>
            <div style={{ display: !isModalOpen ? "flex" : "none" }}>
              <AvatarOption />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
