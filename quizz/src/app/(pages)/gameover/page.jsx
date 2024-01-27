// "use client";
// import { useState } from "react";
import TextEditor from "@/components/Notepad";
import { useRouter } from "next/navigation.js";
import GameOverComp from "@/components/GameOver.jsx";

export default function GameOver() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          font: "50px",
        }}
      >
        <GameOverComp />
      </div>
    </div>
  );
}
