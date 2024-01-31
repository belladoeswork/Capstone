
import Link from "next/link.js";
import { MdExitToApp } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
} from "react-icons/bi";
import Image from "next/image.js";

export default function HowToScreen() {

  return (
    <div className="main-container">
      <div className="cont-title">How to Play</div>

      <span className="line">&#9888; This will restart the game! </span>

      <div className="section">
        <div className="explainer-clock">
          This is an escape jungle. There are 05 hidden coding questions at each
          level. Your goal is to find and answer the questions correctly to
          progress. A single incorrect answer, and you'll have to start your
          journey afresh.
        </div>
        <div className="gif-anim">
          <Image
            className="gif"
            src="/assets/giphy.gif"
            alt="game gif"
            width={200}
            height={120}
          />
        </div>
      </div>
      <div className="section">
        <div className="arrows-anim">
          <BiSolidUpArrow className="arrows-up" />
          <div className="arrows-horizontal">
            <BiSolidLeftArrow className="arrows-left" />
            <BiSolidRightArrow className="arrows-right" />
          </div>
        </div>
        <div>
          <div className="explainer">
            Getting your moves right is critical. Use the keyboard buttons
            &#11013;, &#10145; to move the player to the left and right <br />{" "}
            and the up button &#11014; to jump. Remembering those can save you
            lots of time.
          </div>
        </div>
      </div>
      <div className="section">
        <div className="explainer-clock">
          Speaking of time, you're racing the clock in this game. For every
          level, you have 10 seconds to answer the questions. Don't let the time
          run out! If you're stumped, just click the Quit button to exit the
          game and the interviewer will get in touch.
        </div>
        <div className="div-clock">
          <IoMdAlarm className="clock-anim" />
        </div>
      </div>

        <div className="backbtn">
          <Link href={"/level"}>
          <button className="bckhelpoutline">
            <MdExitToApp className="btnIcon" />
            <span>Back</span>
          </button>
        </Link>
        </div>
    </div>
  );
}
