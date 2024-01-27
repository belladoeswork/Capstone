import { useState, useEffect, useRef } from "react";
import { Sprite } from "../app/(pages)/game/classes/Sprite.jsx";
import {
  floorCollisions,
  platformCollisions,
  floorCollisions1,
  platformCollisions1,
  floorCollisions2,
  platformCollisions2,
  floorCollisions3,
  platformCollisions3,
} from "./data/Collisions.js";

const levelData = {
  1: {
    imageSrc: "/assets/map1.png",
    floorCollisions: floorCollisions,
    platformCollisions: platformCollisions,
  },
  2: {
    imageSrc: "/assets/maplev2.png",
    floorCollisions: floorCollisions1,
    platformCollisions: platformCollisions1,
  },
  // more levels
};

export default function levels() {
  const canvasRef = useRef(null);

  return (
    <div>
      <div>
        <div>
          <div className="">
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
export { levelData };
