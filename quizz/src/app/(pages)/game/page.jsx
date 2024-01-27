"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  floorCollisions,
  platformCollisions,
} from "../../../components/data/Collisions.js";
import { Sprite } from "./classes/Sprite.jsx";
import {
  Player,
  Worm,
  Man,
  Chest,
  GemGold,
  FrogBlue,
  CatStretching,
} from "./classes/Player.jsx";
import { ExtraProp, Bee } from "./classes/ExtraProp.jsx";
import { CollisionBlock } from "./classes/CollisionBlock.jsx";
import { useRouter } from "next/navigation.js";
import { levelData } from "../../../components/MapLevels.jsx";
import Quiz from "@/components/Quiz.jsx";
import { MdClose } from "react-icons/md";
import questions from "@/lib/questions.jsx";
import {
  Rock,
  HiveOne,
  HiveTwo,
  Cat,
  RockThree,
} from "./classes/StaticSprite.jsx";

export default function GameLevel1({ selectedPlayerData, level, setLevel }) {
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [interactedItems, setInteractedItems] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [score, setScore] = useState(0);

  // const router = useRouter();

  const closeWelcome = () => {
    setShowWelcome(false);
  };
  // added for extras?
  const bees = useRef([]);
  const extraPropTimer = useRef(0);
  const extraPropInterval = 1000;

  function isColliding(rect1, rect2) {
    return (
      rect1.position.x < rect2.position.x + rect2.width / 2 &&
      rect1.position.x + rect1.width / 2 > rect2.position.x &&
      rect1.position.y < rect2.position.y + rect2.height / 2 &&
      rect1.position.y + rect1.height / 2 > rect2.position.y
    );
  }

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

    const bee = new Bee({ canvas, context });

    const keys = {
      ArrowRight: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
      Enter: {
        pressed: false,
      },
      Enter: {
        pressed: false,
      },
    };

    let rock;
    let hiveOne;
    let hiveTwo;
    let worm;
    let cat;
    let man;
    let man2;
    let chest;
    let rockThree;
    let gemgold;
    let frogblue;
    let catstretching;

    const spriteLoader = (level) => {
      if (level === 1) {
        rock = new Rock({
          position: {
            x: 410,
            y: 410,
          },
          context: context,
          imageSrc: "/assets/npcs/Rocks.png",
        });

        rockThree = new RockThree({
          position: {
            x: 530,
            y: 380,
          },
          context: context,
          imageSrc: "/assets/npcs/Rock3.png",
        });

        hiveOne = new HiveOne({
          position: {
            x: 100,
            y: 315,
          },
          context: context,
          imageSrc: "/assets/npcs/Hive-One.png",
        });

        hiveTwo = new HiveTwo({
          position: {
            x: 100,
            y: 200,
          },
          context: context,
          imageSrc: "/assets/npcs/RockTwo.png",
        });

        cat = new Cat({
          position: {
            x: 10,
            y: 380,
          },
          context: context,
          imageSrc: "/assets/npcs/Cat.png",
        });

        worm = new Worm({
          position: {
            x: 80,
            y: 195,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/Worm/Idle.png",
          frameRate: 9,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/Worm/Idle.png",
              frameRate: 9,
              frameBuffer: 3,
            },
          },
        });

        man = new Man({
          position: {
            x: 50,
            y: 365,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/Man.png",
          frameRate: 5,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/Man.png",
              frameRate: 5,
              frameBuffer: 1,
            },
          },
        });

        chest = new Chest({
          position: {
            x: 370,
            y: 340,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/Chest.png",
          frameRate: 5,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/chestclosed.png",
              frameRate: 5,
              frameBuffer: 5,
            },
          },
        });

        gemgold = new GemGold({
          position: {
            x: 370,
            y: 10,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/GemGold.png",
          frameRate: 11,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/GemGold.png",
              frameRate: 11,
              frameBuffer: 5,
            },
          },
        });

        frogblue = new FrogBlue({
          position: {
            x: 190,
            y: 235,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/FrogBlueIdle.png",
          frameRate: 8,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/FrogBlueIdle.png",
              frameRate: 8,
              frameBuffer: 5,
            },
          },
        });

        catstretching = new CatStretching({
          position: {
            x: 360,
            y: 180,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/catstretching.png",
          frameRate: 13,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/catstretching.png",
              frameRate: 13,
              frameBuffer: 5,
            },
          },
        });

        man2 = new Man({
          position: {
            x: 50,
            y: 365,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/Man.png",
          frameRate: 5,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/Man.png",
              frameRate: 5,
              frameBuffer: 1,
            },
          },
        });
      }
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

    let lastTime = 0;

    const animate = (currentTime) => {
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
        if (level === 1) {
          // rock.update();
          rockThree.update();
          hiveOne.update();
          // hiveTwo.update();
          worm.update();
          cat.update();
          man.update();
          chest.update();
          gemgold.update();
          frogblue.update();
          catstretching.update();
        }
      };

      spriteUpdateLoader(level);

      //added for bees
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (extraPropTimer.current > extraPropInterval) {
        bees.current.push(new Bee({ canvas, context }));
        extraPropTimer.current = 0;
      } else {
        extraPropTimer.current += deltaTime;
      }

      bees.current.forEach((bee) => {
        // console.log("Updating and drawing bee", bee);
        bee.update(deltaTime);
        bee.draw();
        if (isColliding(bee, player)) {
          setGameOver(true);
        }
        if (bee.markedForDeletion) {
          bees.current.splice(bees.current.indexOf(bee), 1);
        }
      });

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

      // added for attacks
      // if (keys.d.pressed) {
      //   player.switchSprite("AttackRight");
      //   player.velocity.x = 2;
      //   player.lastDirection = "right";
      //   player.shouldPanCameraToTheLeft({ canvas, camera });
      // } else if (keys.a.pressed) {
      //   player.switchSprite("AttackLeft");
      //   player.velocity.x = -2;
      //   player.lastDirection = "left";
      //   player.shouldPanCameraToTheRight({ canvas, camera });
      // }

      context.restore();
    };

    animate(0);

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
        case "a":
          keys.a.pressed = true;
          break;
        case "d":
          keys.d.pressed = true;
          break;
        case "Enter" || "c":
          const items = {
            rock,
            rockThree,
            hiveOne,
            hiveTwo,
            worm,
            cat,
            man,
            chest,
            gemgold,
            frogblue,
            catstretching,
          };
          Object.entries(items).forEach(([key, item]) => {
            const chest = items.chest; // Assuming 'chest' is in your items object
            if (player.isNearItem(chest)) {
              chest.toggleOpen(); // Toggle the chest open/close
            }
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
        case "a":
          keys.a.pressed = false;
          break;
        case "d":
          keys.d.pressed = false;
          break;
      }
    });

    const endOfGame = (gameOver) => {
      if (gameOver) {
        console.log("Game Over");
        // router.push("/gameover");
        // window.location.reload();
        player.switchSprite("Death");
        setTimeout(() => {
          window.location.replace("/gameover");
        }, 8000);

        // router.refresh();
        return;
      }
    };
    endOfGame(gameOver);
  }, [selectedPlayerData, level, isPaused]);

  const isQuestionAnswered = (question) => {
    return question?.isAnswered;
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      {showWelcome && (
        <div className="gameWelcomeModelContainter">
          <div className="gameWelcomeModel">
            <button className="gameWelcomeModelButton" onClick={closeWelcome}>
              <MdClose />
            </button>
            <p>
              <br />
              In your quest through lands untapped, <br />
              Seek the objects where questions are trapped. <br />
              When an item, animal, or man makes your curiosity stir, <br />
              <span style={{ color: "#2274a5", fontWeight: "bolder" }}>
                Press Enter
              </span>
              , as the seeker you were. <br />
              Find and answer the questions to prove your worth, <br />
              Show your wisdom, affirm your birth. <br />
              For if you succeed in this cerebral sob, <br /> A grand reward
              awaits: you're ready for a job!
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
          setGameOver={setGameOver}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
          setLevel={setLevel}
          level={level}
          setScore={setScore}
          score={score}
        />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          backgroundColor: "#F2F5FF",
          flexDirection: "row",
          gap: "100px",
          fontSize: "30px",
        }}
      >
        {/* {resultMessage && <p className="result-message">{resultMessage}</p>} */}
        <h2>
          Score: <span style={{ color: "#2274a5" }}>{score}</span>
        </h2>
        <h2>
          Level: <span style={{ color: "#2274a5" }}>{level}</span>
        </h2>
      </div>
    </div>
  );
}
