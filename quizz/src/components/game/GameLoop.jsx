"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { floorCollisions, platformCollisions } from "../data/Collisions.js";
import { Sprite } from "./classes/Sprite.jsx";
import { Player } from "./classes/Player.jsx";
import {
  ExtraProp,
  Bee,
  Worm,
  Man,
  Chest,
  GemGold,
  FrogBlue,
  CatStretching,
  GemGreen,
  GemBlue,
  Snail,
  ChestGold,
  FrogGreen,
  Boar,
} from "./classes/ExtraProp.jsx";
import { CollisionBlock } from "./classes/CollisionBlock.jsx";
import { useRouter } from "next/navigation.js";
import { levelData } from "../MapLevels.jsx";
import Quiz from "@/components/Quiz.jsx";
import { MdClose } from "react-icons/md";
import questions from "@/lib/questions.jsx";
import {
  Rock,
  HiveOne,
  Cat,
  RockThree,
  Moon,
  Box,
} from "./classes/StaticSprite.jsx";
import Loader from "../Loader.jsx";

export default function GameLevel1({
  selectedPlayerData,
  level,
  setLevel,
  timeRemaining,
  loseGame,
  setLoseGame,
  user,
  winGame,
  setWinGame,
}) {
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  // const [interactedItems, setInteractedItems] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [score, setScore] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // loading all assets
  useEffect(() => {
    const loadAsset = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    const assets = [
      "/assets/npcs/Rocks.png",
      "/assets/npcs/Rock3.png",
      "/assets/npcs/Cat.png",
      "/assets/npcs/BoarIdle.png",
      "/assets/npcs/Worm/Idle.png",
      "/assets/npcs/Man.png",
      "/assets/npcs/Chest.png",
      "/assets/npcs/GemGold.png",
      "/assets/huntress/Idle.png",
      "/assets/huntress/Run.png",
      "/assets/huntress/Jump.png",
      "/assets/huntress/Fall.png",
      "/assets/huntress/FallLeft.png",
      "/assets/huntress/RunLeft.png",
      "/assets/huntress/IdleLeft.png",
      "/assets/huntress/JumpLeft.png",
      "/assets/huntress/AttackLeft.png",
      "/assets/huntress/AttackRight.png",
      "/assets/huntress/Death.png",
      "/assets/bee.png",
      "/assets/map1.png",
      "/assets/map2.png",
      "/assets/map3.png",

      "/assets/npcs/BoarIdle.png",
      "/assets/npcs/GemGreen.png",
      "/assets/npcs/Worm/Idle.png",
    ];

    Promise.all(assets.map(loadAsset)).then(() => {
      setAssetsLoaded(true);
    });
  }, []);

  useEffect(() => {
    localStorage.removeItem("correctAnswerIds");
  }, [level]);

  // const router = useRouter();

  const closeWelcome = () => {
    setShowWelcome(false);
  };
  // for extras?
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

  // score/level
  const scoreRef = useRef(0);
  const levelRef = useRef(0);

  useEffect(() => {
    scoreRef.current = score;
    levelRef.current = level;
  }, [score, level]);

  // timer
  const timerRef = useRef(timeRemaining);

  useEffect(() => {
    timerRef.current = timeRemaining;
  }, [timeRemaining]);

  // handle gaps
  // useEffect(() => {
  //   if (document.fullscreenElement) {
  //     document.body.classList.add('fullscreen');
  //   } else {
  //     document.body.classList.remove('fullscreen');
  //   }
  // }, [document.fullscreenElement]);

  // canvas
  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    // added now
    // canvas.style.height = '100%';

    const currentLevelData = levelData[level];

    if (!currentLevelData) {
      console.error(`Invalid level: ${level}`);
      return;
    }

    // canvas.width = 1024;
    // canvas.height = 576;

    // const scaledCanvas = {
    //   width: canvas.width / 4,
    //   height: canvas.height / 4,
    // };

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // const originalCanvas = { width: canvas.width, height: canvas.height };
    // const scaledCanvas = { width: canvas.width / 4, height: canvas.height / 4 };
    // context.scale(canvas.width / originalCanvas.width, canvas.height / originalCanvas.height);
    // const handleResize = () => {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   scaledCanvas.width = canvas.width / 4;
    //   scaledCanvas.height = canvas.height / 4;
    //   context.setTransform(1, 0, 0, 1, 0, 0); // Reset the transform matrix
    //   context.scale(canvas.width / originalCanvas.width, canvas.height / originalCanvas.height);
    // };

    // window.addEventListener('resize', handleResize);

    const originalCanvas = {
      width: canvas.width,
      height: canvas.height,
    };

    let scaledCanvas = {
      width: canvas.width / 4,
      height: canvas.height / 4,
    };

    const resize = () => {
      // const resize = (width, height) => {

      // Maintain the aspect ratio of the original canvas
      // const aspectRatio = originalCanvas.width / originalCanvas.height;

      // // Calculate the new height based on the width and aspect ratio
      // const newHeight = width / aspectRatio;

      // // If the new height is greater than the window height, adjust the width instead
      // if (newHeight > height) {
      //   width = height * aspectRatio;
      // } else {
      //   height = newHeight;
      // }

      let width = window.innerWidth;
      let height = window.innerHeight;
      const aspectRatio = originalCanvas.width / originalCanvas.height;
      const newHeight = width / aspectRatio;
      if (newHeight > height) {
        width = height * aspectRatio;
      } else {
        height = newHeight;
      }

      //
      canvas.width = width;
      canvas.height = height;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(
        canvas.width / originalCanvas.width,
        canvas.height / originalCanvas.height
      );

      // Update scaledCanvas
      scaledCanvas = {
        width: canvas.width / 4,
        height: canvas.height / 4,
      };
    };

    // Initial resize
    // resize(window.innerWidth, window.innerHeight);

    // const handleResize = (e) => {
    //   resize(e.target.innerWidth, e.target.innerHeight);
    // };

    // window.addEventListener("resize", handleResize);

    resize();
    window.addEventListener("resize", resize);

    const floorCollisions2D = [];
    for (let i = 0; i < currentLevelData.floorCollisions.length; i += 36) {
      floorCollisions2D.push(currentLevelData.floorCollisions.slice(i, i + 36));
    }

    const collisionBlocks = [];
    floorCollisions2D.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol === currentLevelData.collisionSymbol) {
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
        if (symbol === currentLevelData.collisionSymbol) {
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
    };

    let rock;
    let hiveOne;
    let worm;
    let cat;
    let man;
    let man2;
    let man3;
    let chest;
    let rockThree;
    let gemgold;
    let frogblue;
    let catstretching;
    let gemgreen;
    let gemblue;
    let moon;
    let box;
    let snail;
    let goldchest;
    let froggreen;
    let boar;

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

        cat = new Cat({
          position: {
            x: 360,
            y: 180,
          },
          context: context,
          imageSrc: "/assets/npcs/Cat.png",
        });

        boar = new Boar({
          position: {
            x: 80,
            y: 205,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/BoarIdle.png",
          frameRate: 4,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/BoarIdle.png",
              frameRate: 4,
              frameBuffer: 5,
            },
          },
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
      }
      if (level === 2) {
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

        catstretching = new CatStretching({
          position: {
            x: 25,
            y: 185,
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

        frogblue = new FrogBlue({
          position: {
            x: 190,
            y: 245,
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

        gemgreen = new GemGreen({
          position: {
            x: 10,
            y: 10,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/GemGreen.png",
          frameRate: 11,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/GemGreen.png",
              frameRate: 11,
              frameBuffer: 5,
            },
          },
        });

        box = new Box({
          position: {
            x: 490,
            y: 120,
          },
          context: context,
          imageSrc: "/assets/npcs/Box.png",
        });

        hiveOne = new HiveOne({
          position: {
            x: 140,
            y: 175,
          },
          context: context,
          imageSrc: "/assets/npcs/Hive-One.png",
        });
      }
      if (level === 3) {
        moon = new Moon({
          position: {
            x: 370,
            y: 20,
          },
          context: context,
          imageSrc: "/assets/npcs/Moon.png",
        });

        snail = new Snail({
          position: {
            x: 10,
            y: 220,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/SnailIdle.png",
          frameRate: 8,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/SnailIdle.png",
              frameRate: 8,
              frameBuffer: 5,
            },
          },
        });

        goldchest = new ChestGold({
          position: {
            x: 300,
            y: 320,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/GoldenChest.png",
          frameRate: 5,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/GoldenChest.png",
              frameRate: 5,
              frameBuffer: 5,
            },
          },
        });
        froggreen = new FrogGreen({
          position: {
            x: 490,
            y: 235,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/FrogGreenIdle.png",
          frameRate: 8,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/FrogGreenIdle.png",
              frameRate: 8,
              frameBuffer: 5,
            },
          },
        });

        gemblue = new GemBlue({
          position: {
            x: 10,
            y: 380,
          },
          collisionBlocks,
          platformCollisionBlocks,
          context: context,
          imageSrc: "/assets/npcs/GemBlue.png",
          frameRate: 11,
          animations: {
            Idle: {
              imageSrc: "/assets/npcs/GemBlue.png",
              frameRate: 11,
              frameBuffer: 5,
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

    const renderLoadingScreen = () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "white";
      context.fillText("Loading...", canvas.width / 2, canvas.height / 2);
    };

    const animate = (currentTime) => {
      // if (!isPaused) {
      if (!assetsLoaded) {
        renderLoadingScreen();
        window.requestAnimationFrame(animate);
      }
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // added
      context.setTransform(1, 0, 0, 1, 0, 0);

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
          // worm.update();
          boar.update();
          cat.update();
          man.update();
          chest.update();
          gemgold.update();
        }
        if (level === 2) {
          catstretching.update();
          frogblue.update();
          // man2.update();
          gemgreen.update();
          box.update();
          hiveOne.update();
        }
        if (level === 3) {
          moon.update();
          snail.update();
          goldchest.update();
          froggreen.update();
          gemblue.update();
        }
      };

      spriteUpdateLoader(level);

      // bees
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (extraPropTimer.current > extraPropInterval) {
        bees.current.push(new Bee({ canvas, context }));
        extraPropTimer.current = 0;
      } else {
        extraPropTimer.current += deltaTime;
      }

      bees.current.forEach((bee) => {
        bee.update(deltaTime);
        bee.draw();
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

      // font for the text
      // Fullscreen functionality
      // if (keys.f.pressed) {
      //   if (!document.fullscreenElement) {
      //     document.documentElement.requestFullscreen();
      //   }
      // } else if (keys.r.pressed) {
      //   if (document.fullscreenElement) {
      //     document.exitFullscreen();
      //   }
      // }

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

      // context.fillStyle = "rgba(0, 0, 0, 0.5)";
      // context.fillRect(10 - camera.position.x, 30 - camera.position.y, 200, 70);

      // // Draw score and level
      // context.font = '12px "Press Start 2P"';
      // context.fillStyle = "#F2F5FF";

      // context.fillText(
      //   "Score:",
      //   10 - camera.position.x,
      //   50 - camera.position.y
      // );
      // context.fillText(
      //   "Level:",
      //   10 - camera.position.x,
      //   90 - camera.position.y
      // );

      // // Draw  numbers for score and level
      // context.fillStyle = "#2274a5";
      // context.fillText(
      //   scoreRef.current,
      //   100 - camera.position.x,
      //   50 - camera.position.y
      // );
      // context.fillText(
      //   levelRef.current,
      //   100 - camera.position.x,
      //   90 - camera.position.y
      // );

      // Set the font and color for the text
      context.font = '5px "Press Start 2P"';

      // score box
      context.strokeStyle = "#2274a5";
      context.lineWidth = 2;
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(5 - camera.position.x, 2 - camera.position.y, 50, 10);
      context.strokeRect(5 - camera.position.x, 2 - camera.position.y, 50, 10);
      context.fillStyle = "#F2F5FF";
      context.fillText(
        "Score: " + scoreRef.current,
        10 - camera.position.x,
        10 - camera.position.y
      );

      // level box

      // Draw the level box
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(60 - camera.position.x, 2 - camera.position.y, 50, 10);
      context.strokeRect(60 - camera.position.x, 2 - camera.position.y, 50, 10);
      context.fillStyle = "#F2F5FF";
      context.fillText(
        "Level: " + levelRef.current,
        65 - camera.position.x,
        10 - camera.position.y
      );

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
        // case "a":
        //   keys.a.pressed = true;
        //   break;
        // case "d":
        //   keys.d.pressed = true;
        //   break;
        case "Enter":
          const items = {
            rock: level === 1 ? rock : undefined,
            rockThree: level === 1 ? rockThree : undefined,
            // worm: level === 1 ? worm : undefined,
            boar: level === 1 ? boar : undefined,
            cat: level === 1 ? cat : undefined,
            man: level === 1 ? man : undefined,
            chest: level === 1 ? chest : undefined,
            gemgold: level === 1 ? gemgold : undefined,
            frogblue: level === 2 ? frogblue : undefined,
            hiveOne: level === 2 ? hiveOne : undefined,
            catstretching: level === 2 ? catstretching : undefined,
            // man2: level === 2 ? man2 : undefined,
            gemgreen: level === 2 ? gemgreen : undefined,
            box: level === 2 ? box : undefined,
            moon: level === 3 ? moon : undefined,
            snail: level === 3 ? snail : undefined,
            goldchest: level === 3 ? goldchest : undefined,
            froggreen: level === 3 ? froggreen : undefined,
            gemblue: level === 3 ? gemblue : undefined,
          };
          Object.entries(items).forEach(([key, item]) => {
            if (item && player.isNearItem(item)) {
              const sprite = item?.key;
              const question = questions?.filter(
                (question) =>
                  question?.sprite?.toLowerCase() === sprite?.toLowerCase()
              );

              const correctAnswerIds = (
                localStorage.getItem("correctAnswerIds") || ""
              ).split(",");
              if (question[0]) {
                if (correctAnswerIds.some((obj) => obj == question[0].id)) {
                  alert(`you can't answer a question twice`);
                  return;
                }
                setCurrentQuestion(question[0]);
                setShowPopup(true);
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

    // const endOfGame = (gameOver) => {
    //   if (gameOver) {
    //     console.log("Game Over");
    //     setTimeout(() => {
    //       window.location.replace("/gameover");
    //     }, 8000);
    //     return;
    //   }
    // };
    // endOfGame(gameOver);
  }, [selectedPlayerData, level, isPaused]);

  const isQuestionAnswered = (question) => {
    return question?.isAnswered;
  };

  const onAnsswerQuestion = useCallback(() => {
    if (currentQuestion && !isQuestionAnswered(currentQuestion)) {
      setCurrentQuestion({ ...currentQuestion, isAnswered: true });
      const correctAnswerIds = localStorage.getItem("correctAnswerIds") || "";
      localStorage.setItem(
        "correctAnswerIds",
        correctAnswerIds.length > 0
          ? `${correctAnswerIds},${currentQuestion.id}`
          : currentQuestion.id
      );
    }
  }, [currentQuestion]);

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
          onAnsswerQuestion={onAnsswerQuestion}
          loseGame={loseGame}
          setLoseGame={setLoseGame}
          user={user}
          winGame={winGame}
          setWinGame={setWinGame}
        />
      )}
    </div>
  );
}
