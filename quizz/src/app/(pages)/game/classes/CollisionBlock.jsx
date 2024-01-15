import React from "react";
import { Sprite } from './Sprite.jsx';
import { Player } from './Player.jsx';


// collision class
export class CollisionBlock {
  constructor({ position, context }) {
    this.position = position;
    this.context = context;

    this.width = 16;
    this.height = 16;
  }

  draw() {
    this.context.fillStyle = "rgba(255, 0, 0, 0.5)";
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
  }
}

