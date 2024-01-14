"use client";

import Navbar from "@/components/Navbar.jsx";
import Game from "@/components/Game.jsx";
// import App from "./app.js";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hidePlayButton, setHidePlayButton] = useState(true);
  const [hideHowToButton, setHideHowToButton] = useState(true);

  function handlePlayClick() {
    setHidePlayButton(false);
  }

  function handleHowtoClick() {
    setHideHowToButton(false);
  }
  return (
    <main>
      <Navbar />
      <h1>CodeHero</h1>
      <Game />
      {/* <App /> */}

      <h1 id="homeHeader">CodeHero</h1>
      <p>
        Welcome to Code Hero, the developer's quest where your journey to
        becoming a Javascript master coder begins.
      </p>

      <div id="how-to-play-container">
        <button onClick={handleHowtoClick}>
          <h2>{hideHowToButton ? "How To Play" : "Close"}</h2>
        </button>

        {/* Show room options if the play now button is click  */}
        <div style={{ display: !hideHowToButton ? "flex" : "none" }}>
          <p>
            ou are about to embark on an adventure through four stages, each
            representing a critical stage in your coding education. Your
            ultimate goal? To land a dream job in the competitive world of
            software development.
          </p>
          <p>
            In each city, you must answer five coding questions correctly to
            progress. Be warned: a single incorrect answer, and you'll have to
            start your journey afresh. But fear not, for with each attempt, you
            grow stronger in your knowledge and closer to your dream job.
          </p>
        </div>
      </div>

      <p>
        Ready to start your odyssey? Sharpen your mind, prepare your keyboard,
        and step into the world of "Code Hero" Your future as a coding expert
        awaits!
      </p>

      <div id="play-now-container">
        {/* hide play now button if clicked */}
        <div style={{ display: !hidePlayButton ? "none" : "flex" }}>
          <button id="play-now-btn" type="button" onClick={handlePlayClick}>
            Play Now
          </button>
        </div>
        {/* Show room options if the play now button is click  */}
        <div style={{ display: !hidePlayButton ? "flex" : "none" }}>
          <div className="level-link-container">
            <h2>Select Room</h2>

            <Link href={`/login`}>Level 1</Link>
            <Link href={`/login`}>Level 3</Link>
            <Link href={`/login`}>Level 3</Link>
            <Link href={`/login`}>Level 4</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
