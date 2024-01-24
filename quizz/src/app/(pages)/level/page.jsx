"use client";
import Link from "next/link.js";
import { useRouter } from "next/navigation.js";
import React, { useState, useEffect, useRef } from "react";
import PlayerSelection from "@/components/PlayerSelection.jsx";
import HowTo from "@/components/HowToScreen.jsx";
import GameLevel1 from "../game/page.jsx";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function levelPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioElement = useRef(new Audio("/audio/LittleR.ogg"));

  const handlePlayerSelect = (playerData) => {
    setSelectedPlayerData(playerData);
    setGameStarted(true);
    audioElement.current.play();
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  };

  useEffect(() => {
    audioElement.current.loop = true;
    audioElement.current.muted = isMuted;
    if (gameStarted) {
      audioElement.current.play();
    }
  }, [gameStarted, isMuted]);

  return (
    <div className="game-container">
      <div className="volume-control">
        {isMuted ? (
          <div className="volume-control">
            <IoVolumeMedium
              size={64}
              color="#D29E38"
              onClick={handleMuteToggle}
            />
          </div>
        ) : (
          <div className="volume-control">
            <IoVolumeMute
              size={64}
              color="#D29E38"
              onClick={handleMuteToggle}
            />
          </div>
        )}
      </div>
      <>
        <button onClick={handlePauseToggle}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </>

      {!gameStarted && <PlayerSelection onPlayerSelect={handlePlayerSelect} />}

      {gameStarted && selectedPlayerData && (
        <GameLevel1 selectedPlayerData={selectedPlayerData} level="level1" />
      )}
      
      <div className="btnhelp">
        <Link href={"/howto"}>
          <button className="btnhelpoutline">
            <IoIosHelpCircleOutline className="btnIcon" />
            <span>Help</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
