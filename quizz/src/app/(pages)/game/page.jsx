"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  floorCollisions,
  platformCollisions,
} from "../../../components/data/Collisions.js";
import { Sprite } from "./classes/Sprite.jsx";
import { Player, Worm } from "./classes/Player.jsx";
import { CollisionBlock } from "./classes/CollisionBlock.jsx";
import { useRouter } from "next/navigation.js";
// import level from "../level/page.jsx";
import { levelData } from "../../../components/MapLevels.jsx";
import Quiz from "@/components/Quiz.jsx";
import questions from "@/lib/questions.jsx";
import { Rock, HiveOne, HiveTwo, Cat } from "./classes/StaticSprite.jsx";

export default function GameLevel1({ selectedPlayerData, level }) {
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [interactedItems, setInteractedItems] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    const currentLevelData = levelData[level];

    if (!currentLevelData) {
      console.error(`Invalid level: ${level}`);
      return;
    }

    canvas.width = 1024;
    canvas.height = 576;

    const scaledCanvas = {
      width: canvas.width / 4,
      height: canvas.height / 4,
    };

    const floorCollisions2D = [];
    for (let i = 0; i < currentLevelData.floorCollisions.length; i += 36) {
      floorCollisions2D.push(currentLevelData.floorCollisions.slice(i, i + 36));
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
    for (let i = 0; i < currentLevelData.platformCollisions.length; i += 36) {
      platformCollisions2D.push(
        currentLevelData.platformCollisions.slice(i, i + 36)
      );
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
        y: 150,
      },
      collisionBlocks,
      platformCollisionBlocks,
      context: context,
      imageSrc: selectedPlayerData.animations.Idle.imageSrc,
      frameRate: 8,
      animations: selectedPlayerData.animations,
    });

    const keys = {
      ArrowRight: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
      // Enter: {
      //   pressed: false,
      // },
    };

    let rock;
    let hiveOne;
    let hiveTwo;
    let worm;
    let cat;

    const spriteLoader = (level) => {
      if (level === "level1") {
        rock = new Rock({
          position: {
            x: 310,
            y: 310,
          },
          context: context,
          imageSrc: "/assets/Rocks.png",
        });
      }

      hiveOne = new HiveOne({
        position: {
          x: 100,
          y: 315,
        },
        context: context,
        imageSrc: "/assets/Hive-One.png",
      });

      hiveTwo = new HiveTwo({
        position: {
          x: 100,
          y: 200,
        },
        context: context,
        imageSrc: "/assets/RockTwo.png",
      });

      cat = new Cat({
        position: {
          x: 360,
          y: 180,
        },
        context: context,
        imageSrc: "/assets/Cat.png",
      });

      worm = new Worm({
        position: {
          x: 50,
          y: 360,
        },
        collisionBlocks,
        platformCollisionBlocks,
        context: context,
        imageSrc: "/assets/Worm/Idle.png",
        frameRate: 9,
        animations: {
          Idle: {
            imageSrc: "/assets/Worm/Idle.png",
            frameRate: 9,
            frameBuffer: 3,
          },
        },
      });
    };

    spriteLoader(level);

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      context: context,
      imageSrc: currentLevelData.imageSrc,
    });

    const backgroundImageHeight = 432;

    const camera = {
      position: {
        x: 0,
        y: -backgroundImageHeight + scaledCanvas.height,
      },
    };

    const animate = () => {
      if (!isPaused) {
        window.requestAnimationFrame(animate);
      }
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.save();
      context.scale(4, 4);
      context.translate(camera.position.x, camera.position.y);
      background.update();

      player.checkForHorizontalCanvasCollision();
      player.update();

      const spriteUpdateLoader = (level) => {
        if (level === "level1") {
          rock.update();
          hiveOne.update();
          hiveTwo.update();
          worm.update();
          cat.update();
        }
      };

      spriteUpdateLoader(level);

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
        // } else if (keys.Enter.pressed) {
        //   player.switchSprite("Attack");
        //   // player.velocity.x = 2;
        //   player.lastDirection = "left";
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
    };

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
        case " ":
          setIsPaused(!isPaused);
          break;
        case "Enter":
          // keys.Enter.pressed = true;
          const items = { rock, hiveOne, hiveTwo, worm, cat };
          Object.entries(items).forEach(([key, item]) => {
            if (player.isNearItem(item)) {
              const sprite = item?.key;
              const question = questions?.filter(
                (question) =>
                  question?.sprite?.toLowerCase() === sprite?.toLowerCase()
              );
              if (isQuestionAnswered(question[0])) {
                alert(`you can't answer a question twice`);
                return;
              }
              setCurrentQuestion(question[0]);
              setShowPopup(true);
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
        // case "Enter":
        //   keys.Enter.pressed = false;
        //   break;
      }
    });
  }, [selectedPlayerData, level, isPaused]);

  const isQuestionAnswered = (question) => {
    return question?.isAnswered;
  };
  return (
    <div>
      {showWelcome && (
        <div
          className="gameWelcomeModel"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            width: "300px",
            marginLeft: "50px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            <button
              onClick={closeWelcome}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
            >
              X
            </button>
            <p>
              In your quest through lands untapped. Seek the objects where
              questions are trapped. When an item or even snakes makes your
              curiosity stir. Press Enter, as the seeker you were
            </p>
          </div>
        </div>
      )}
      {currentQuestion && (
        <Quiz
          question={currentQuestion}
          handleAnswer={(isCorrect) => handleAnswer(isCorrect, currentItem)}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          gameOver={gameOver}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setGameOver={setGameOver}
          questions={questions}
        />
      )}
      <canvas ref={canvasRef} />
    </div>
  );
}
