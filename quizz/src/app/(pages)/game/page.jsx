"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  floorCollisions,
  platformCollisions,
} from "../../../components/data/Collisions.js";
import collision from "../../../helpers/utils.js";
import { useRouter } from "next/navigation.js";
import questionsData from "@/lib/question";
import QuizTest from "@/components/QuizTest.jsx";
import { Player } from "./classes/Player.jsx";
import { Rock, HiveOne, HiveTwo } from "./classes/StaticSprite.jsx";
import { CollisionBlock } from "./classes/CollisionBlock.jsx";
import { Sprite } from "./classes/Sprite.jsx";

export default function GameTestThree() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [interactedItems, setInteractedItems] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
        x: 310,
        y: 310,
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

    const hiveTwo = new HiveTwo({
      position: {
        x: 100,
        y: 200,
      },
      context: context,
      imageSrc: "/assets/Hive-Two.png",
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

      player.checkForHorizontalCanvasCollision();
      player.update();

      rock.update(interactedItems);
      hiveOne.update(interactedItems);
      hiveTwo.update(interactedItems);

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

        case "Enter":
          const items = { rock, hiveOne, hiveTwo };
          Object.entries(items).forEach(([key, item]) => {
            if (player.isNearItem(item) && !interactedItems[key]) {
              setCurrentQuestion(questionsData[currentQuestionIndex]);
              setShowPopup(true);
              setCurrentItem(key);
              player.setCurrentItem(item);
              if (!showPopup) {
                getNextQuestion();
              }
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
  }, [interactedItems]);
  //   [interactedItems]);

  useEffect(() => {}, []);
  const getNextQuestion = () => {
    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questionsData[currentQuestionIndex + 1]);
      setShowQuestion(true);
    } else {
      setShowQuestion(false);
      setGameOver(true);
    }
  };

  const handleAnswer = (isCorrect, itemKey) => {
    setShowPopup(false);
    if (isCorrect) {
      setInteractedItems({ ...interactedItems, [itemKey]: true });
      setScore(score + 1);
      if ((score + 1) % 5 === 0) {
        if (score + 1 < questionsData.length) {
          setLevel(level + 1);
        } else {
          setGameOver(true);
          setGameOverMessage("Congratulations! You completed all levels!");
        }
      }
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setLevel(0);
    setShowQuestion(false);
    setGameOver(false);
    setGameOverMessage("");
  };

  // if (gameOver) {
  //   return (
  //     <div style={{ textAlign: "center" }}>
  //       <h1>Game Over</h1>
  //       <button onClick={restartGame}>Restart</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      {!gameOver && (
        <>
          <canvas ref={canvasRef} />
          <div
            style={{
              display: showPopup ? "flex" : "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
            }}
          >
            {showPopup && (
              <QuizTest
                showQuestion={showQuestion}
                question={currentQuestion}
                handleAnswer={(isCorrect) =>
                  handleAnswer(isCorrect, currentItem)
                }
                getNextQuestion={getNextQuestion}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#F2F5FF",
              flexDirection: "row",
              paddingLeft: "200px",
              gap: "100px",
              fontSize: "50px",
            }}
          >
            <h2>
              Score: <span style={{ color: "#2274a5" }}>{score}</span>{" "}
            </h2>
            <h2>
              Level: <span style={{ color: "#2274a5" }}>{level + 1}</span>{" "}
            </h2>
          </div>
        </>
      )}
      {gameOver && (
        <div style={{ textAlign: "center" }}>
          <h1>Game Over</h1>
          <p>
            <a href="https://www.youtube.com/@hackmyhead">
              Review Javascript Concepts with Max from Hackmyhead
            </a>
          </p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
}
