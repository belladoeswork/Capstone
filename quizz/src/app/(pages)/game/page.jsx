"use client";

import React, { useRef, useEffect } from "react";
import {
  floorCollisions,
  platformCollisions,
} from "../../../components/data/Collisions.js";
import collision from "../../../helpers/utils.js";
import { Sprite } from "./classes/Sprite.jsx";
import { Player } from "./classes/Player.jsx";
import { CollisionBlock } from "./classes/CollisionBlock.jsx";

export default function GameLevel1() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 1024;
    canvas.height = 576;

    const scaledCanvas = {
      width: canvas.width / 4,
      height: canvas.height / 4,
    };

    const floorCollisions2D = [];
    for (let i = 0; i < floorCollisions.length; i += 30) {
      floorCollisions2D.push(floorCollisions.slice(i, i + 30));
    }

    const collisionBlocks = [];

    floorCollisions2D.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (
          symbol === 151 ||
          symbol === 51 ||
          symbol === 76 ||
          symbol === 154 ||
          symbol === 155 ||
          symbol === 153 ||
          symbol === 152
        ) {
          collisionBlocks.push(
            new CollisionBlock({
              position: {
                x: x * 16,
                y: y * 16,
              },
              context: context,
            })
          );
        }
      });
    });

    const platformCollisions2D = [];
    for (let i = 0; i < platformCollisions.length; i += 30) {
      platformCollisions2D.push(platformCollisions.slice(i, i + 30));
    }

    const platformCollisionBlocks = [];
    platformCollisions2D.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol === 387 || symbol === 388 || symbol === 389) {
          platformCollisionBlocks.push(
            new CollisionBlock({
              position: {
                x: x * 16,
                y: y * 16,
              },
              context: context,
              height: 4,
            })
          );
        }
      });
    });

    // const gravity = 0.1;

    // draw new player
    const player = new Player({
      position: {
        x: 100,
        y: 300,
      },
      context: context,
      collisionBlocks,
      platformCollisionBlocks,
      imageSrc: "/assets/hero/Idle.png",
      frameRate: 4,
      // animations: {
      //   Idle: {
      //     imageSrc: "/assets/hero/Idle.png",
      //     frameRate: 4,
      //     frameBuffer: 3,
      //   },
      //   Run: {
      //     imageSrc: "/assets/hero/Run.png",
      //     frameRate: 8,
      //     frameBuffer: 3,
      //   }
      // },
    });

    // player keys
    const keys = {
      ArrowRight: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
    };

    // getting the background image
    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: "assets/level1.png",
      context: context,
    });

    // animation loop
    function animate() {
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.clearRect(0, 0, canvas.width, canvas.height);
      window.requestAnimationFrame(animate);

      // start transformations
      context.save();
      context.scale(4, 4);
      context.translate(0, -background.image.height + scaledCanvas.height);

      // draw bg
      background.update();
      // collision blocks
      collisionBlocks.forEach((CollisionBlock) => CollisionBlock.update());

      //platform collision blocks
      platformCollisionBlocks.forEach((block) => block.update());

     
      // player.velocity.x = 0;
      // if (keys.ArrowRight.pressed) {
      //   // player.switchSprite("Run");
      //   player.velocity.x = 2;
      //   player.lastDirection = "right";
      // } else if (keys.ArrowLeft.pressed) {
      //   // player.switchSprite("Run");
      //   player.velocity.x = -2;
      //   player.lastDirection = "left";
      // } else if (player.velocity.y === 0) {
      //   player.velocity.x = 0;
      //   if (player.lastDirection === "right") player.switchSprite("Idle");
      //   // else player.switchSprite("Idle");
      // }



      
            // end transformations
      context.restore();
      

       // // draw player
       player.update();


      // draw player
      // player.update();
    }

    animate();

    // player keys
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          player.velocity.y = -4;
          break;
        case "ArrowDown":
          player.velocity.y = 1;
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          player.velocity.x = -2;
          break;
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          player.velocity.x = 2;
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          keys.ArrowLeft.pressed = false;
          player.velocity.x = 0;
          break;
        case "ArrowRight":
          keys.ArrowRight.pressed = false;
          player.velocity.x = 0;
          break;
      }
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
      Hi
    </div>
  );
}
