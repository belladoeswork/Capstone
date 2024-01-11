"use client"

// import { useRef, useEffect } from 'react';

// export default function Sprite() {

//     return (
//         <canvas width={16} height={16} ref={canvasRef}/>
//     )
    
// }

import React from "react";
import { useEffect, useRef } from "react";
import { CELL_SIZE } from "../../helpers/consts.js";
 
 function Sprite({ image, frameCoord, size = 16 }) {
   const canvasRef = useRef();
   useEffect(() => {
     /** @type {HTMLCanvasElement} */
     const canvasEl = canvasRef.current;
     const ctx = canvasEl.getContext("2d");
 
     //Clear out anything in the canvas tag
     ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
 
     //Draw a graphic to the canvas tag
     const tileSheetX = Number(frameCoord.split("x")[0]);
     const tileSheetY = Number(frameCoord.split("x")[1]);
 
     ctx.drawImage(
       image, // Image to pull from
       tileSheetX * CELL_SIZE, // Left X corner of frame
       tileSheetY * CELL_SIZE, // Top Y corner of frame
       size, //How much to crop from the sprite sheet (X)
       size, //How much to crop from the sprite sheet (Y)
       0, //Where to place this on canvas tag X (0)
       0, //Where to place this on canvas tag Y (0)
       size, //How large to scale it (X)
       size //How large to scale it (Y)
     );
   }, [image, frameCoord, size]);
 
   return <canvas width={size} height={size} ref={canvasRef} />;
 }
 
 const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;
 

// tilemap instead

// export default class TileMap {
//     constructor(tileSize) {
//       this.tileSize = tileSize;
//       this.wall = this.#image("wall.png");
//       this.pacman = this.#image("pacman.png");
//       this.dot = this.#image("yellowDot.png");
//       this.ghost = this.#image("ghost.png");
//     }
  
//     #image(fileName) {
//       const img = new Image();
//       img.src = `images/${fileName}`;
//       return img;
//     }
  
//     //1 - wall
//     //0 - dots
//     //2 - pacman
//     //3 enemies
//     map = [
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
//       [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//       [1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//       [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//       [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//       [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
//       [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
//       [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
//       [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
//       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     ];
  
//     draw(canvas, ctx) {
//       this.#setCanvasSize(canvas);
//       this.#clearCanvas(canvas, ctx);
//       this.#drawMap(ctx);
//     }
  
//     #drawMap(ctx) {
//       for (let row = 0; row < this.map.length; row++) {
//         for (let column = 0; column < this.map[row].length; column++) {
//           const tile = this.map[row][column];
//           let image = null;
//           switch (tile) {
//             case 1:
//               image = this.wall;
//               break;
//             case 0:
//               image = this.dot;
//               break;
//             case 2:
//               image = this.pacman;
//               break;
//             case 3:
//               image = this.ghost;
//               break;
//           }
  
//           if (image != null)
//             ctx.drawImage(
//               image,
//               column * this.tileSize,
//               row * this.tileSize,
//               this.tileSize,
//               this.tileSize
//             );
//         }
//       }
//     }
  
//     #clearCanvas(canvas, ctx) {
//       ctx.fillStyle = "black";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     }
  
//     #setCanvasSize(canvas) {
//       canvas.height = this.map.length * this.tileSize;
//       canvas.width = this.map[0].length * this.tileSize;
//     }
//   }