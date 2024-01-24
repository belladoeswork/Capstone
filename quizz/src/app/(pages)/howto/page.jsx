import Link from "next/link.js";
import { MdExitToApp } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
} from "react-icons/bi";

export default function HowToScreen() {
  return (
    <div>
      <div className="main-container">
        <div className="cont-title">How to Play</div>

        <div className="">
          <div>
            <div item xs={12} sm={12} md={4}>
              How to move
            </div>
            <div item xs={12} sm={12} md={8}>
              <div className="explainer">
                There are 05 coding questions at each level. Your goal is to
                find and answer the questions correctly to progress. A single
                incorrect answer, and you'll have to start your journey afresh.
              </div>
            </div>
          </div>
          <div>
            <div item xs={12} sm={12} md={8} className="text-ele">
              <div className="explainer">
                Use the keyboard keys like &#11013;, &#11014;, &#10145; and ÷ to
                create your equation. Click on the round operator icons to cycle
                through the operators. When you have the solution, don't forget
                to tap the red target card to finish the round!
              </div>
            </div>
            <div item xs={12} sm={12} md={4}>
              How to ops
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
                &#11013;, &#10145; to move the player to the left and
                right <br /> and the up button  &#11014; to jump. Remembering those can
                save you lots of time.
              </div>
            </div>
          </div>
          <div className="section">
            <div className="explainer-clock">
              Speaking of time, you're racing the clock in this game. For every
              level, you have 10 seconds to answer the questions. Don't let the
              time run out! If you're stumped, just click the Quit button to
              exit the game and the interviewer will get in touch.
            </div>
            <div className="div-clock">
              <IoMdAlarm className="clock-anim" />
            </div>
          </div>
          <div>
            <div item xs={12}>
              <div className="back-btn">
                <Link href={"/level"}>
                  <button className="back-btn">
                    <MdExitToApp className="back-icon" />
                    <span>Back</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
