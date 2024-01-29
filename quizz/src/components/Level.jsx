"use client";
import Link from "next/link.js";
import { useRouter } from "next/navigation.js";
import React, { useState, useEffect, useRef } from "react";
import PlayerSelection from "@/components/PlayerSelection.jsx";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdAlarm } from "react-icons/io";
import TextEditor from "@/components/Notepad.jsx";
import { CiStickyNote } from "react-icons/ci";
import GameLevel1 from "./game/GameLoop.jsx";

export default function LevelPage({ user }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const audioElement = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(10 * 60);
  const [level, setLevel] = useState(1);
  const [showNote, setShowNote] = useState(false);
  const router = useRouter();

  const handlePlayerSelect = (playerData) => {
    setSelectedPlayerData(playerData);
    setGameStarted(true);
    audioElement.current.play();
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const goFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    audioElement.current = new Audio("/audio/LittleR.ogg");
  }, []);

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
    } else if (gameStarted && timeRemaining === 0) {
      router.push("/gameover");
    }

    return () => clearInterval(timer);
  }, [gameStarted, timeRemaining]);

  return (
    <div className="game-container">
      {!gameStarted && <PlayerSelection onPlayerSelect={handlePlayerSelect} />}

      {gameStarted && selectedPlayerData && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
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
              setLevel={setLevel}
              level={level}
              user={user}
              key={level}
              timeRemaining={timeRemaining}
            />

            <div className="btnhelp">
              <Link href={"/howto"}>
                <button className="btnhelpoutline">
                  <IoIosHelpCircleOutline className="btnIcon" />
                  <span>Help</span>
                </button>
              </Link>
            </div>
            <button
              className="btnnote"
              onClick={() => {
                setShowNote(!showNote);
              }}
            >
              <CiStickyNote />
            </button>
            <div className="textEditor-popup">{showNote && <TextEditor />}</div>
            <div className="fullscreentoggle">
              <button onClick={goFullscreen}>F</button>
              <button onClick={exitFullscreen}>Esc</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
