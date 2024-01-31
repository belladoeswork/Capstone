"use client";
import Image from "next/image.js";
import { useState } from "react";

export default function NextLevelTransition() {
  const [nextLevel, setLevelSet] = useState(false);

  // const handleNextLevelButton = () => {
  //   setLevelSet(true);
  // };

  return (
    <div
      className="gif-nextLevel"
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "1000",
      }}
    >
      <Image
        src="/assets/vids/nextLevel.gif"
        alt="next level video"
        width={1050}
        // height={500}
        height={600}


      />
    </div>
  );
}
