import { useState, useEffect, useRef } from "react";
import { Sprite } from "./game/classes/Sprite.jsx";
import {
  floorCollisions,
  platformCollisions,
  floorCollisions1,
  platformCollisions1,
  floorCollisions2,
  platformCollisions2,
} from "./data/Collisions.js";

const levelData = {
  1: {
    imageSrc: "/assets/map1.png",
    floorCollisions: floorCollisions,
    platformCollisions: platformCollisions,
  },
  level2: {
    imageSrc: "/assets/map2.png",
    floorCollisions: floorCollisions1,
    platformCollisions: platformCollisions1,
  },
  level3: {
    imageSrc: "/assets/map3.png",
    floorCollisions: floorCollisions2,
    platformCollisions: platformCollisions2,
  },
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
