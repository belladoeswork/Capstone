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
import GameOver from "@/components/GameOver.jsx";
import WinGameDisplay from "./WinGameDisplay.jsx";
import GameLevel1 from "./game/GameLoop.jsx";
import Loading from "@/components/Loading.jsx";

import HowToScreen from "@/app/(pages)/howto/page.jsx";

export default function LevelPage({ user, note }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const audioElement = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(10 * 60);
  const [level, setLevel] = useState(1);
  const [loseGame, setLoseGame] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [winGame, setWinGame] = useState(false);
  const router = useRouter();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // loading all assets
  useEffect(() => {
    const loadAsset = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    const assets = [
      "/assets/npcs/Rocks.png",
      "/assets/npcs/Rock3.png",
      "/assets/npcs/Cat.png",
      "/assets/npcs/BoarIdle.png",
      "/assets/npcs/Worm/Idle.png",
      "/assets/npcs/Man.png",
      "/assets/npcs/Chest.png",
      "/assets/npcs/GemGold.png",
      "/assets/huntress/Idle.png",
      "/assets/huntress/Run.png",
      "/assets/huntress/Jump.png",
      "/assets/huntress/Fall.png",
      "/assets/huntress/FallLeft.png",
      "/assets/huntress/RunLeft.png",
      "/assets/huntress/IdleLeft.png",
      "/assets/huntress/JumpLeft.png",
      "/assets/huntress/AttackLeft.png",
      "/assets/huntress/AttackRight.png",
      "/assets/huntress/Death.png",
      "/assets/bee.png",
      "/assets/map1.png",
      "/assets/map2.png",
      "/assets/map3.png",

      "/assets/npcs/BoarIdle.png",
      "/assets/npcs/GemGreen.png",
      "/assets/npcs/Worm/Idle.png",
    ];

    Promise.all(assets.map(loadAsset)).then(() => {
      setAssetsLoaded(true);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAssetsLoaded(true);
    }, 2000);
  }, []);

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

  const handleWinGame = () => {
    setWinGame(true);
  };

  useEffect(() => {
    let timer;
    if (gameStarted && timeRemaining > 0 && !winGame) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime - 1 === 0) {
            setLoseGame(true);
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [gameStarted, timeRemaining, winGame]);

  return (
    <div className="game-container">
      {/* {!assetsLoaded ? (
        <Loading />
      ) : //  */}
        {/* {
      loseGame ? (
        <GameOver />
      ) : winGame ? (
        <WinGameDisplay />
      ) : (
        <> */}
          {!gameStarted && (
            <PlayerSelection onPlayerSelect={handlePlayerSelect} />
          )}
          {gameStarted && selectedPlayerData && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {loseGame && (<GameOver />)}
                  <GameLevel1
                    winGame={winGame}
                    setWinGame={setWinGame}
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
                    <Tippy
                      placement="top"
                      content="Oh nooooo... See ya later fren"
                    >
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
                    <span className="rotate">&lt;</span>Jump
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
                    <Tippy placement="top" content="Jot things down">
                      <span
                        className="screentoggle"
                        onClick={() => {
                          setShowNote(!showNote);
                        }}
                      >
                        {" "}
                        &#x1F5D2; Notepad
                      </span>
                    </Tippy>
                  </span>
                  <span>
                    <Tippy placement="top" content="Sound on/off">
                      {isMuted ? (
                        <span
                          className="volume-control"
                          onClick={handleMuteToggle}
                        >
                          &#x1F50A;
                        </span>
                      ) : (
                        <span
                          className="volume-control"
                          onClick={handleMuteToggle}
                        >
                          &#x1F507;
                        </span>
                      )}
                    </Tippy>
                  </span>
                  <div className="textEditor-popup">
                    {showNote && <TextEditor user={user} note={note} />}
                  </div>
            </div>
          )}
    </div>
  );
}
