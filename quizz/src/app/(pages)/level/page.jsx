"use client";

import { useRouter } from "next/navigation.js";
import React, { useState, useEffect } from "react";
import PlayerSelection from "@/components/PlayerSelection.jsx";
import GameLevel1 from "../game/page.jsx";

export default function levelPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);

  const handlePlayerSelect = (playerData) => {
    setSelectedPlayerData(playerData);
    setGameStarted(true);
  };

  return (
    <div>
      {!gameStarted && <PlayerSelection onPlayerSelect={handlePlayerSelect} />}

      {gameStarted && selectedPlayerData && (
        <GameLevel1 selectedPlayerData={selectedPlayerData} level="level1"/>
      )}
    </div>
  );
};

