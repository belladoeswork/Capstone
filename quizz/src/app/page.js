"use client";
import Navbar from "@/components/Navbar.jsx";
import Game from "@/components/Game.jsx";
import PlayerSelection from "@/components/PlayerSelection.jsx";
import Footer from "@/components/Footer.jsx";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image.js";
import CodeHero from "/public/assets/Level1.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import GameLevel1 from "./(pages)/game/page.jsx";

export const dynamic = "force-dynamic";

export default function Home() {
  const [hidePlayButton, setHidePlayButton] = useState(true);
  const [hideHowToButton, setHideHowToButton] = useState(true);
  //
  // const [gameStarted, setGameStarted] = useState(false);
  // const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  //

  function handlePlayClick() {
    setHidePlayButton(false);
  }

  function handleHowtoClick() {
    setHideHowToButton(!hideHowToButton);
  }

  // const handlePlayerSelect = (playerData) => {
  //   setSelectedPlayerData(playerData);
  //   setGameStarted(true);
  // };

  return (
    <main>
      {/* {!gameStarted && <PlayerSelection onPlayerSelect={handlePlayerSelect} />}

      {gameStarted && selectedPlayerData && (
        <GameLevel1 selectedPlayerData={selectedPlayerData} />
      )} */}

      <div id="homepage-container">
        <div id="homepage-left-container">
          <div className="container">
            <h1 className="typed">A JavaScript Escape Room</h1>
          </div>
          <div className="home-description">
            <p>Welcome to CodeHero!</p>
            <p>
              A game where your journey to becoming a Javascript master coder
              begins.
            </p>
            <p>Ready to start your odyssey?</p>{" "}
            <p>
              Sharpen your mind, prepare your keyboard, and step into the world
              of
            </p>
            <span className="span-codeHero">"CodeHero" </span>
            <p>Your future as a coding expert awaits!</p>
          </div>
          <div id="how-to-play-container">
            <button
              id="howto-btn"
              onClick={handleHowtoClick}
              className="editProfile-button"
            >
              {hideHowToButton ? `Learn How to Play ` : `Hide `}
              {hideHowToButton ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
            </button>

            {/* Show if the button is click  */}
            <div style={{ display: !hideHowToButton ? "flex" : "none" }}>
              <p>
                Embark on an adventure through four stages, each representing a
                critical stage in your coding education. Your ultimate goal? To
                land a dream job in the competitive world of software
                development. You must find and answer five coding questions
                correctly to progress.{" "}
                <span id="warning-text">
                  Be warned: a single incorrect answer, and you'll have to start
                  your journey afresh.{" "}
                </span>
                But fear not, for with each attempt, you grow stronger in your
                knowledge and closer to your dream job.
              </p>
            </div>
          </div>
          <div id="play-now-container">
            {/* hide play now button if clicked */}
            <div style={{ display: !hidePlayButton ? "none" : "flex" }}>
              <button id="play-now-btn" type="button" onClick={handlePlayClick}>
                Get Started
              </button>
            </div>
            {/* Show room options if the play now button is click  */}
            <div style={{ display: !hidePlayButton ? "flex" : "none" }}>
              <div className="level-link-container">
                <h2>Select Room</h2>

                <Link href={"/level"}>Level 1</Link>
                <Link href={"/level"}>Level 2</Link>
                <Link href={"/level"}>Level 3</Link>
                <Link href={"/level"}>Level 4</Link>
              </div>
            </div>
          </div>
        </div>

        <div id="homepage-right-container">
          <Image src={CodeHero} alt="Level One Map" className="homepage-img" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

/* <p className="homepage-ptag">
            Find the questions and answer them correctly to beat the level.
          </p>*/
