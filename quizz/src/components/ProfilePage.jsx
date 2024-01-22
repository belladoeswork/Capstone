"use client";
import { fetchUser } from "@/lib/fetchUser";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa6";
import AvatarOption from "./AvatarOption.jsx";
import { useRouter } from "next/navigation.js";

import profileImg1 from "@/assets/avatar/9439685.jpg";
import profileImg2 from "@/assets/avatar/9439833.jpg";

export default function ProfilePage({ user, profile }) {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(profileImg1);

  //const [avatarProfile, setAvatarProfile] = useState("avatar1");

  //const user = await fetchUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleEditProfileClick = () => {
    //console.log("Button clicked");
    setModalOpen(true);
  };
  console.log(user.avatar);
  return (
    <div className="profile-container">
      <div>
        <div>{user.avatar}</div>
        <Image
          src={selectedAvatar}
          alt={"avatar img"}
          className="profile-image"
          width={100}
          height={100}
        />
      </div>
      {user.id && (
        <div>
          <h1 className="user-name">{user.username}</h1>
          <div className="level-indicator">
            <FaTrophy />
            <p>Level:</p>
          </div>
          <div className="profileButton-div">
            <div>
              <button
                onClick={handleEditProfileClick}
                className="editProfile-button"
              >
                Choose an Avatar
              </button>
              <div style={{ display: isModalOpen ? "flex" : "none" }}>
                <AvatarOption setSelectedAvatar={setSelectedAvatar} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
