"use client";

import React, { useRef, useEffect } from "react";
import { floorCollisions, platformCollisions } from "../../../components/data/Collisions.js";
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



    class CollisionBlock {
      constructor({ position }) {
        this.position = position;

        this.width = 16;
        this.height = 16;
      }

      draw() {
        context.fillStyle = "rgba(255, 0, 0, 0.5)";
        context.fillRect(
          this.position.x ,
          this.position.y,
          this.width,
          this.height
        );
      }
      update() {
        this.draw();
      }
    }

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
          }));
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
        if (
          symbol === 387 ||
          symbol === 388 ||
          symbol === 389
        ) {
          platformCollisionBlocks.push(
          new CollisionBlock({
            position: {
              x: x * 16,
              y: y * 16,
            },
          }));
        }
      });
    });

    // row 15 *16 = 240
    // y 2 *16 = 32


    const gravity = 0.1;

    // sprite class
    class Sprite {
      constructor({ position, imageSrc }) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.imageLoaded = false;
        this.image.onload = () => {
          this.imageLoaded = true;
          this.scale = Math.max(
            canvas.width / this.image.width,
            canvas.height / this.image.height
          );
          this.position.y = canvas.height - this.image.height * this.scale;
        };
      }

      draw() {
        if (!this.image) return;
        context.drawImage(
          this.image,
          this.position.x,
          this.position.y,
     
        );
      }
      update() {
        this.draw();
      }
    }

    // player class
    class Player {
      constructor({position, collisionBlocks}) {
        this.position = position;
        this.velocity = {
          x: 0,
          y: 1,
        };
        this.height = 25;
        this.width = 25;
        this.collisionBlocks= collisionBlocks;
      }
      draw() {
        context.fillStyle = "red";
        context.fillRect(this.position.x*4, this.position.y*4, this.width *4, this.height*4);
      }
      update() {
        this.draw();
        this.checkForVerticalCollision();
        this.position.x += this.velocity.x;
        
        this.applyGravity();
        
      }
      applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += gravity;
      }

      // check for player & collision intersection

      checkForVerticalCollision() { 
        for (let i = 0; i < this.collisionBlocks.length; i++) {
          const block = this.collisionBlocks[i];
          if (
            collision(
              {
                object1: this,
                object2: block,
              }
            )
          ) {
            if (this.velocity.y > 0) {
              this.velocity.y = 0;
              this.position.y = block.position.y - this.height;
            }
          }
            // console.log("collision");
        }
      }

    }

    // draw new player

    const player = new Player({
      position: {
        x: 100,
        y: 0,
      },
      collisionBlocks,
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
      imageSrc: "/assets/level1.png",
    });

    // animation loop

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      window.requestAnimationFrame(animate);
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

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

      // end transformations
      context.restore();

    
      // draw player
      player.update();
    }

    animate();

    // player keys
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          player.velocity.y = -20;
          break;
        case "ArrowDown":
          player.velocity.y = 1;
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          player.velocity.x = -5;
          break;
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          player.velocity.x = 5;
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
