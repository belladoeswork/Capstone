"use client";
import Image from "next/image.js";
import { useState } from "react";

export default function NextLevelTransition() {
  const [nextLevel, setLevelSet] = useState(false);

  const handleNextLevelButton = () => {
    setLevelSet(true);
  };

  return (
    <div className="gif-nextLevel">
      <Image
        src="/assets/vids/nextLevel.gif"
        alt="next level video"
        width={200}
        height={120}
      />
      <button onClick={() => handleNextLevelButton()}>Let's Go</button>
    </div>
  );
}
