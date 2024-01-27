"use client";
import Link from "next/link.js";
import React, { useState, useEffect, useRef } from "react";
import PlayerSelection from "@/components/PlayerSelection.jsx";
import GameLevel1 from "../game/page.jsx";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Rock, HiveOne, HiveTwo, Worm } from "../game/classes/StaticSprite.jsx";
import { IoMdAlarm } from "react-icons/io";

export default function levelPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const audioElement = useRef(new Audio("/audio/LittleR.ogg"));

  const [timeRemaining, setTimeRemaining] = useState(10 * 60);

  const handlePlayerSelect = (playerData) => {
    setSelectedPlayerData(playerData);
    setGameStarted(true);
    audioElement.current.play();
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    audioElement.current.loop = true;
    audioElement.current.muted = isMuted;
    if (gameStarted) {
      audioElement.current.play();
    }

    // Cleanup function
    return () => {
      audioElement.current.pause();
      audioElement.current.currentTime = 0;
    };
  }, [gameStarted, isMuted]);

  useEffect(() => {
    let timer;
    if (gameStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [gameStarted, timeRemaining]);

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

      {!gameStarted && <PlayerSelection onPlayerSelect={handlePlayerSelect} />}

      {gameStarted && selectedPlayerData && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div className="clockhelp">
              <button className="clockoutline">
                <IoMdAlarm className="btnIcon" />
                <span>
                  {" "}
                  {Math.floor(timeRemaining / 60)}:
                  {(timeRemaining % 60).toString().padStart(2, "0")}
                </span>
              </button>
            </div>
            <GameLevel1
              selectedPlayerData={selectedPlayerData}
              level="level1"
            />
          </div>
        </div>
      )}

      <div className="btnhelp">
        <Link href={"/howto"}>
          <button className="btnhelpoutline">
            <IoIosHelpCircleOutline className="btnIcon" />
            <span>Help</span>
          </button>
        </Link>
      </div>
      {/* <Notepad /> */}
    </div>
  );
}
