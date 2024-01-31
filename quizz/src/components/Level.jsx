"use client";
import Link from "next/link.js";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/navigation.js";
import { Router, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import PlayerSelection from "@/components/PlayerSelection.jsx";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdFullscreenExit } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import TextEditor from "@/components/Notepad.jsx";
import { CiStickyNote } from "react-icons/ci";

import GameLevel1 from "./game/GameLoop.jsx";
import Loader from "./game/Loader.jsx";
import HowToScreen from "@/app/(pages)/howto/page.jsx";

export default function LevelPage({ user, note }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const audioElement = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(10 * 60);
  const [timeRemaining, setTimeRemaining] = useState(10 * 60);
  const [level, setLevel] = useState(1);
  const [loseGame, setLoseGame] = useState(false);
  const [winGame, setWinGame] = useState(false);
  const router = useRouter();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

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
    if (gameStarted && timeRemaining > 0 && !winGame) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (gameStarted && timeRemaining === 0) {
      setLoseGame(true);
    }

    return () => clearInterval(timer);
  }, [gameStarted, timeRemaining]);

  return (
    <div className="game-container">
      {!gameStarted && <PlayerSelection onPlayerSelect={handlePlayerSelect} />}
      {gameStarted && selectedPlayerData && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GameLevel1
            selectedPlayerData={selectedPlayerData}
            setLevel={setLevel}
            level={level}
            user={user}
            key={level}
            timeRemaining={timeRemaining}
            loseGame={loseGame}
            setLoseGame={setLoseGame}
          />
        </div>
      )}
      {gameStarted && selectedPlayerData && (
        <div id="controls">
          <span className="btnhelp">
            <Tippy placement="top" content="Oh nooooo... See ya later fren">
              <Link href={"/"}>
                <span className="btnhelp">&#9166; Exit</span>
              </Link>
            </Tippy>
          </span>
          <span>
            <span>Enter</span>Open question
          </span>
          <span>
            <span>&lt;</span>
            <span>&gt;</span>Move
          </span>
          <span>
            <span class="rotate">&lt;</span>Jump
          </span>
          <span className="btnhelp">
            <Tippy placement="top" content="Help">
              <Link href={"/howto"}>
                <span className="btnhelp">&#9432; Help</span>
              </Link>
            </Tippy>
          </span>
          <span>
            <Tippy placement="top" content="Fullscreen">
              <span className="screentoggle" onClick={goFullscreen}>
                {" "}
                &#x26F6; Expand
              </span>
            </Tippy>
          </span>
          <span>
            <Tippy placement="top" content="Sound on/off">
              {isMuted ? (
                <span className="volume-control" onClick={handleMuteToggle}>
                  &#x1F50A;
                </span>
              ) : (
                <span className="volume-control" onClick={handleMuteToggle}>
                  &#x1F507;
                </span>
              )}
            </Tippy>
          </span>
            </div>
            <button
              className="btnnote"
              onClick={() => {
                setShowNote(!showNote);
              }}
            >
              <CiStickyNote />
            </button>
            {/* </Tippy> */}
            <div className="textEditor-popup">
              {showNote && <TextEditor user={user} note={note} />}
            </div>
            <div className="screentoggle">
              <Tippy placement="left" content="Fullscreen">
                <button className="full" onClick={goFullscreen}>
                  <MdFullscreenExit />
                </button>
              </Tippy>
              {/* <button className="full" onClick={exitFullscreen}>Esc</button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
