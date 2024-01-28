"use client";
import Image from "next/image.js";
import { useState } from "react";
import { useRouter } from "next/navigation.js";

import avatar1 from "@/assets/avatar/avatar1.jpg";
import avatar2 from "@/assets/avatar/avatar2.jpg";
import avatar3 from "@/assets/avatar/avatar3.jpg";
import avatar4 from "@/assets/avatar/avatar4.jpg";
import avatar5 from "@/assets/avatar/avatar5.jpg";
import avatar6 from "@/assets/avatar/avatar6.jpg";

import { CgCloseR } from "react-icons/cg";

export default function AvatarOption({
  selectedAvatar,
  setSelectedAvatar,
  user,
}) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //console.log(user);

  async function handleAvatarClick(avatar) {
    const response = await fetch(`/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        avatar,
      }),
    });
    setModalOpen(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    router.refresh();
    //console.log(avatar);
    //setSelectedAvatar(avatar);
  }

  function handleCloseModal() {
    //console.log("close button clicked");
    setModalOpen(false);
  }

  return (
    <div
      className="profile-modal"
      style={{ display: !modalOpen ? "none" : "flex" }}
    >
      <div>
        <div className="modal-header">
          <button onClick={handleCloseModal} className="closeIcon">
            <CgCloseR />
          </button>

          <h3 className="modalHeader-text">Choose your Avatar</h3>
        </div>
        <div disabled={isLoading}>
          <Image
            src={avatar1}
            alt={"avatar"}
            className="avatar-images"
            onClick={() => handleAvatarClick("avatar1")}
            disabled={isLoading}
          />
          <Image
            src={avatar2}
            alt={"avatar"}
            className="avatar-images"
            onClick={() => handleAvatarClick("avatar2")}
          />
          <Image
            src={avatar3}
            alt={"avatar"}
            className="avatar-images"
            onClick={() => handleAvatarClick("avatar3")}
          />
          <Image
            src={avatar4}
            alt={"avatar"}
            className="avatar-images"
            onClick={() => handleAvatarClick("avatar4")}
          />
          <Image
            src={avatar5}
            alt={"avatar"}
            className="avatar-images"
            onClick={() => handleAvatarClick("avatar5")}
          />
          <Image
            src={avatar6}
            alt={"avatar"}
            className="avatar-images"
            onClick={() => handleAvatarClick("avatar6")}
          />
          <div className="loader-container">
            {isLoading && <div className="loader"></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
