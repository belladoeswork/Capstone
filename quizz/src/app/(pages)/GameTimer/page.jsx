"use client";

import React, { useState, useEffect, useRef } from "react";
import Timer from "@/components/Timer";

export default function GameTimer({}) {
  const [timeRemaining, startGame, isTimeRunning] = Timer();

  return (
    <div>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
    </div>
  );
}
