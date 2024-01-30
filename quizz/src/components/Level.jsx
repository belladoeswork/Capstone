"use client";
import Link from "next/link.js";
import { useRouter } from "next/navigation.js";
import React, { useState, useEffect, useRef } from "react";
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

export default function LevelPage({ user }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const audioElement = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(10 * 60); //change this after time testing
  const [level, setLevel] = useState(1);
  const [showNote, setShowNote] = useState(false);
  const [loseGame, setLoseGame] = useState(false);
  const [winGame, setWinGame] = useState(false);
  const router = useRouter();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const handlePlayerSelect = (playerData) => {
    setSelectedPlayerData(playerData);
    setGameStarted(true);
    audioElement.current.play();


    Promise.all([
      loadAsset('asset1.png'),
      loadAsset('asset2.png'),
      loadAsset("/assets/npcs/Rocks.png"),
      loadAsset("/assets/npcs/Rock3.png"),
      loadAsset("/assets/npcs/Cat.png"),
      loadAsset("/assets/npcs/BoarIdle.png"),
      loadAsset("/assets/npcs/Worm/Idle.png"),
      loadAsset("/assets/npcs/Man.png"),
      loadAsset("/assets/npcs/Chest.png"),
      loadAsset("/assets/npcs/GemGold.png"),
      loadAsset("/assets/huntress/Idle.png"),
      loadAsset("/assets/huntress/Run.png"),
      loadAsset("/assets/huntress/Jump.png"),
      loadAsset("/assets/huntress/Fall.png"),
      loadAsset("/assets/huntress/FallLeft.png"),
      loadAsset("/assets/huntress/RunLeft.png"),
      loadAsset("/assets/huntress/IdleLeft.png"),
      loadAsset("/assets/huntress/JumpLeft.png"),
      loadAsset("/assets/huntress/AttackLeft.png"),
      loadAsset("/assets/huntress/AttackRight.png"),
      loadAsset("/assets/huntress/Death.png"),
      loadAsset("/assets/bee.png"),
      loadAsset("/assets/map1.png"),
      loadAsset("/assets/map2.png"),
      loadAsset("/assets/map3.png"),

      loadAsset("/assets/npcs/BoarIdle.png"),
      loadAsset("/assets/npcs/GemGreen.png"),
      loadAsset("/assets/npcs/Worm/Idle.png")
      // ... more assets
    ]).then(() => {
      // All assets have loaded, start the game
      setGameStarted(true);
    });
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const goFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  };

  // const exitFullscreen = () => {
  //   if (document.fullscreenElement) {
  //     document.exitFullscreen();
  //   }
  // };

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
      //router.push("/gameover");
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
            {!gameStarted ? <Loader /> : (
  selectedPlayerData && (
            <GameLevel1
              selectedPlayerData={selectedPlayerData}
              setLevel={setLevel}
              level={level}
              user={user}
              key={level}
              timeRemaining={timeRemaining}
              loseGame={loseGame}
              setLoseGame={setLoseGame}
              winGame={winGame}
              setWinGame={setWinGame}
            /> )
            

            <div className="btnhelp">
              <Link href={"/howto"}>
                <button className="btnhelpoutline">
                  <IoIosHelpCircleOutline className="btnIcon" />
                  <span>Help</span>
                </button>
              </Link>
            </div>
            {/* <button
              className="btnnote"
              onClick={() => {
                setShowNote(!showNote);
              }}
            >
              <CiStickyNote />
            </button>
            </Tippy>
            <div className="textEditor-popup">{showNote && <TextEditor />}</div> */}
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
