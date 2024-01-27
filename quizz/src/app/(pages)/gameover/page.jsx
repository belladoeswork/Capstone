// "use client";
// import { useState } from "react";
import TextEditor from "@/components/Notepad";
import { useRouter } from "next/navigation.js";

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
        GameOver
      </div>
    </div>
  );
}
