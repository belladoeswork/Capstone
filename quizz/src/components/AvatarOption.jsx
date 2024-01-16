"use client";
import Image from "next/image.js";
import { useState } from "react";

export default function AvatarOption({ src, alt, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onSelect(!isSelected);
  };

  return (
    <div
      className={`avatar-option ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div>
        <Image src={src} alt={alt} fill={true} />
      </div>
    </div>
  );
}
