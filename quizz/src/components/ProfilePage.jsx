"use client";
import { fetchUser } from "@/lib/fetchUser";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa6";
import AvatarOption from "./AvatarOption.jsx";
import { useRouter } from "next/navigation.js";

import avatar6 from "@/assets/avatar/avatar6.jpg";

import Link from "next/link.js";

export default function ProfilePage({ user }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(avatar6);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleEditProfileClick = () => {
    //console.log("Button clicked");
    setModalOpen(true);
  };
  const router = useRouter();
  //console.log(user.avatar);
  return (
    <div className="profilePage-container">
      <div className="profile-container">
        <div>
          <Image
            src={`/${user.avatar}.jpg` || "/assets/avatar/avatar6.jpg"}
            alt={"avatar"}
            className="profile-image"
            width={100}
            height={100}
          />
        </div>
        {user.id && (
          <div>
            <div style={{ display: isModalOpen ? "flex" : "none" }}>
              <AvatarOption setSelectedAvatar={setSelectedAvatar} user={user} />
            </div>
            <h1 className="user-name">{user.username}</h1>

            <div className="profileButton-div">
              <button
                onClick={handleEditProfileClick}
                className="editProfile-button"
              >
                Choose an Avatar
              </button>
              <Link href={"/"}>
                <button className="editProfile-button">Play</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* <div className="level-indicator">
            <FaTrophy />
            <p>Last Level: {user.level}</p>
          </div>*/
