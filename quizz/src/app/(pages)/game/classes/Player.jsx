import { Sprite } from "./Sprite.jsx";
import collision from "../../../../helpers/utils.js";

const gravity = 0.1;

export class Player extends Sprite {
  constructor({
    position,
    collisionBlocks,
    platformCollisionBlocks,
    imageSrc,
    frameRate,
    scale = 1,
    context,
    // animations,
  }) {
    super({ imageSrc, frameRate, scale });
    this.position = position;
    this.context = context;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.collisionBlocks = collisionBlocks;
    this.platformCollisionBlocks = platformCollisionBlocks;
    this.hitbox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 10,
      height: 10,
    };

    // this.animations = animations
    // this.lastDirection = 'right'

    // for (let key in this.animations) {
    //   const image = new Image()
    //   image.src = this.animations[key].imageSrc

    //   this.animations[key].image = image
    // }
  }

  // switchSprite(key) {
  //   if (this.image === this.animations[key].image || !this.loaded) return

  //   this.currentFrame = 0
  //   this.image = this.animations[key].image
  //   this.frameBuffer = this.animations[key].frameBuffer
  //   this.frameRate = this.animations[key].frameRate
  // }

  update() {
    this.updateFrames();
    this.updateHitBox();

    // this.draw();

    // player
    this.context.fillStyle = "rgba(0, 255, 0, 0.5)";
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    // hitbox
    this.context.fillStyle = "rgba(255, 0, 0, 0.5)";
    this.context.fillRect(
      this.hitbox.position.x,
      this.hitbox.position.y,
      this.hitbox.width,
      this.hitbox.height
    );

    this.draw();

    this.position.x += this.velocity.x;
    // this.applyGravity();
    this.updateHitBox();
    this.checkForHorizontalCollisions();

    this.position.y += this.velocity.y;
    // this.applyGravity();
    this.updateHitBox();
    this.checkForVerticalCollisions();

    this.applyGravity();
    this.updateHitBox();
  }

  updateHitBox() {
    this.hitbox = {
      position: {
        x: this.position.x + 15,
        y: this.position.y + 13,
      },
      width: 35,
      height: 54,
    };
  }

  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.x > 0) {
          this.velocity.x = 0;

          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width;

          this.position.x = collisionBlock.position.x - offset - 0.01;
          break;
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0;

          const offset = this.hitbox.position.x - this.position.x;

          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01;
          break;
        }
      }
    }
  }

  applyGravity() {
    // this.position.y += this.velocity.y;
    this.velocity.y += gravity;
    // to rmv
    if (this.position.y + this.height > this.context.canvas.height) {
      this.position.y = this.context.canvas.height - this.height;
      this.velocity.y = 0;
    }
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0;

          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height;

          this.position.y = collisionBlock.position.y - offset - 0.01;
          break;
        }

        if (this.velocity.y < 0) {
          this.velocity.y = 0;

          const offset = this.hitbox.position.y - this.position.y;

          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01;
          break;
        }
      }
    }
  }
}
