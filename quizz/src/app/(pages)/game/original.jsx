"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  floorCollisions,
  platformCollisions,
} from "../../../components/data/Collisions.js";
import collision from "../../../helpers/utils.js";
import { Sprite } from "./classes/Sprite.jsx";
import { Player } from "./classes/Player.jsx";
import { CollisionBlock } from "./classes/CollisionBlock.jsx";
import QuestionSelection from "@/components/QuestionSelection.jsx";
import { useRouter } from "next/navigation.js";
import ScoreBoard from "@/components/Score.jsx";
import { Rock, HiveOne } from "./classes/StaticSprite.jsx";
import QuizComponent from "@/components/Quiz.jsx";

export default function GameLevel1() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  // const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [interactedItems, setInteractedItems] = useState({});
  const [getQuestion, setGetQuestion] = useState(false);
  const router = useRouter();
  const canvasRef = useRef(null);

  // const question =
  //   currentQuestionIndex >= 0
  //     ? questionsData[level][currentQuestionIndex]
  //     : null;

  // const handleAnswer = (isCorrect, itemKey) => {
  //   setShowPopup(false);
  //   if (isCorrect) {
  //     setScore(score + 1);
  //     setInteractedItems({ ...interactedItems, [itemKey]: false });

  //     if ((score + 1) % 5 === 0) {
  //       // Level up after every 5 correct answers
  //       setLevel(level + 1);
  //       setCurrentQuestionIndex(-1);
  //     }
  //   } else {
  //     setGameOver(true);
  //   }
  // };

  // const getNextQuestion = () => {
  //   if (currentQuestionIndex + 1 < questionsData[level].length) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     setShowPopup(true);
  //   }
  // };

  // const restartGame = () => {
  //   setScore(0);
  //   setLevel(0);
  //   setCurrentQuestionIndex(-1);
  //   setShowPopup(false);
  //   setGameOver(false);
  //   setInteractedItems({});
  //   router.reload();
  // };

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
      interactedItems: interactedItems,
      currentItem: currentItem,
    });

    const keys = {
      ArrowRight: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
    };

    const rock = new Rock({
      position: {
        x: 310, // x position of the rock
        y: 310, // y position of the rock
      },
      context: context,
      imageSrc: "/assets/Rocks.png",
    });

    const hiveOne = new HiveOne({
      position: {
        x: 100,
        y: 315,
      },
      context: context,
      imageSrc: "/assets/Hive-One.png",
    });

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
      rock.update();
      hiveOne.update();

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
        // case "Enter":
        //   if (player.isNearItem(hiveOne)) {
        //     setShowPopup(true);
        //   }
        //   break;
        case "w":
          const items = { rock, hiveOne /* add other sprites here */ }; // Define other items here
          Object.entries(items).forEach(([key, item]) => {
            if (player.isNearItem(item) && !interactedItems[key]) {
              setShowPopup(true); // Show the question popup
              setCurrentItem(key); // Set the current item being interacted with
              player.setCurrentItem(items[key]); // Update player's currentItem
              setGetQuestion(true);
            }
          });
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

    player.setInteractedItems(interactedItems);
    player.setCurrentItem(currentItem);
  }, []);
  // [interactedItems, currentItem]);

  if (gameOver) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Game Over</h1>
        <button onClick={restartGame}>Restart</button>
      </div>
    );
  }

  return (
    <div>
      <canvas ref={canvasRef} />
      Hi
      {showPopup && (
        <QuizComponent
          getQuestion={getQuestion}
          setGetQuestion={setGetQuestion}
        />
      )}
      {/* <div>Score: {score}</div>
      <div>Level: {level}</div> */}
      {gameOver && (
        <div style={{ textAlign: "center" }}>
          <h1>Game Over</h1>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
}
