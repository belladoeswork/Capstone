"use client";

import { FaGithub } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//import NextLevelTransition from "./NextLevelTransition.jsx";

export default function Footer() {
  return (
    <div>
      <footer className="footer-basic">
     
        <div className="socialContainer">
        <div class="col-md-4 col-sm-6 col-xs-12">
            <ul className="social">
            {/* <div class="col-md-4 col-sm-6 col-xs-12"> */}
                <p className="copyright-text">
                  HackMyHead Bootcamp Oct '23 - Jan '24
                </p>
            {/* </div> */}
            {/* <div class="col-md-8 col-sm-6 col-xs-12"> */}
                <p className="copyright">
                Made with &#9829; by the CodeHero Team
                </p>
            {/* </div> */}
                <Tippy placement="top" content="Vanessa">
                  <li>
                    <a
                      className="github"
                      href="https://github.com/belladoeswork"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </Tippy>
                <Tippy placement="top" content="Izzy">
                  <li>
                    <a
                      className="github"
                      href="https://github.com/ihirad "
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </Tippy>
                <Tippy placement="top" content="Elri">
                  <li>
                    <a
                      className="github"
                      href="https://github.com/Elri87"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </Tippy>
                <Tippy placement="top" content="Zubedah">
                  <li>
                    <a className="github" href="#">
                      <FaGithub />
                    </a>
                  </li>
                </Tippy>
            </ul>
            
              
            </div>
          </div>
      </footer>
      </div>


  );
}
