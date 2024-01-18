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
    for (let i = 0; i < floorCollisions.length; i += 36) {
      floorCollisions2D.push(floorCollisions.slice(i, i + 36));
    }

    const collisionBlocks = [];
    floorCollisions2D.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol === 21557) {
          collisionBlocks.push(
            new CollisionBlock({
              position: {
                x: x * 16,
                y: y * 16,
              },
            })
          );
        }
      });
    });

    const platformCollisions2D = [];
    for (let i = 0; i < platformCollisions.length; i += 36) {
      platformCollisions2D.push(platformCollisions.slice(i, i + 36));
    }

    const platformCollisionBlocks = [];
    platformCollisions2D.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol === 21557) {
          platformCollisionBlocks.push(
            new CollisionBlock({
              position: {
                x: x * 16,
                y: y * 16,
              },
              height: 4,
            })
          );
        }
      });
    });

    const gravity = 0.1;

    const player = new Player({
      position: {
        x: 100,
        y: 300,
      },
      collisionBlocks,
      platformCollisionBlocks,
      context: context,
      imageSrc: "/assets/huntress/Idle.png",
      frameRate: 8,
      animations: {
        Idle: {
          imageSrc: "/assets/huntress/Idle.png",
          frameRate: 8,
          frameBuffer: 3,
        },
        Run: {
          imageSrc: "/assets/huntress/Run.png",
          frameRate: 8,
          frameBuffer: 5,
        },
        Jump: {
          imageSrc: "/assets/huntress/Jump.png",
          frameRate: 2,
          frameBuffer: 3,
        },
        Fall: {
          imageSrc: "/assets/huntress/Fall.png",
          frameRate: 2,
          frameBuffer: 3,
        },
        FallLeft: {
          imageSrc: "/assets/huntress/FallLeft.png",
          frameRate: 2,
          frameBuffer: 3,
        },
        RunLeft: {
          imageSrc: "/assets/huntress/RunLeft.png",
          frameRate: 8,
          frameBuffer: 5,
        },
        IdleLeft: {
          imageSrc: "/assets/huntress/IdleLeft.png",
          frameRate: 8,
          frameBuffer: 3,
        },
        JumpLeft: {
          imageSrc: "/assets/huntress/JumpLeft.png",
          frameRate: 2,
          frameBuffer: 3,
        },
      },
    });

    const keys = {
      ArrowRight: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
    };

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      context: context,
      imageSrc: "/assets/map1.png",
    });

    const backgroundImageHeight = 432;

    const camera = {
      position: {
        x: 0,
        y: -backgroundImageHeight + scaledCanvas.height,
      },
    };

    function animate() {
      window.requestAnimationFrame(animate);
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.save();
      context.scale(4, 4);
      context.translate(camera.position.x, camera.position.y);
      background.update();
      // collisionBlocks.forEach((collisionBlock) => {
      //   collisionBlock.update()
      // })

      // platformCollisionBlocks.forEach((block) => {
      //   block.update()
      // })

      player.checkForHorizontalCanvasCollision();
      player.update();

      player.velocity.x = 0;
      if (keys.ArrowRight.pressed) {
        player.switchSprite("Run");
        player.velocity.x = 2;
        player.lastDirection = "right";
        player.shouldPanCameraToTheLeft({ canvas, camera });
      } else if (keys.ArrowLeft.pressed) {
        player.switchSprite("RunLeft");
        player.velocity.x = -2;
        player.lastDirection = "left";
        player.shouldPanCameraToTheRight({ canvas, camera });
      } else if (player.velocity.y === 0) {
        if (player.lastDirection === "right") player.switchSprite("Idle");
        else player.switchSprite("IdleLeft");
      }

      if (player.velocity.y < 0) {
        player.shouldPanCameraDown({ camera, canvas });
        if (player.lastDirection === "right") player.switchSprite("Jump");
        else player.switchSprite("JumpLeft");
      } else if (player.velocity.y > 0) {
        player.shouldPanCameraUp({ camera, canvas });
        if (player.lastDirection === "right") player.switchSprite("Fall");
        else player.switchSprite("FallLeft");
      }

      context.restore();
    }

    animate();

    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          break;
        case "ArrowUp":
          player.velocity.y = -4;
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowRight":
          keys.ArrowRight.pressed = false;
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = false;
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
