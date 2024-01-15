    // row 15 *16 = 240
    // y 2 *16 = 32

    // class CollisionBlock {
    //   constructor({ position }) {
    //     this.position = position;

    //     this.width = 16;
    //     this.height = 16;
    //   }

    //   draw() {
    //     context.fillStyle = "rgba(255, 0, 0, 0.5)";
    //     context.fillRect(
    //       this.position.x,
    //       this.position.y,
    //       this.width,
    //       this.height
    //     );
    //   }
    //   update() {
    //     this.draw();
    //   }
    // }

    // // sprite class
    // class Sprite {
    //   constructor({
    //     position,
    //     imageSrc,
    //     frameRate = 1,
    //     frameBuffer = 3,
    //     scale = 1,
    //   }) {
    //     this.position = position;
    //     this.scale = scale;
    //     this.loaded = false;
    //     this.image = new Image();
    //     this.image.onload = () => {
    //       this.width = (this.image.width / this.frameRate) * this.scale;
    //       this.height = this.image.height * this.scale;
    //       this.loaded = true;
    //     };
    //     this.image.src = imageSrc;
    //     this.frameRate = frameRate;
    //     this.currentFrame = 0;
    //     this.frameBuffer = frameBuffer;
    //     this.elapsedFrames = 0;
    //   }

    //   draw() {
    //     if (!this.image) return;

    //     const cropbox = {
    //       position: {
    //         x: this.currentFrame * (this.image.width / this.frameRate),
    //         y: 0,
    //       },
    //       width: this.image.width / this.frameRate,
    //       height: this.image.height,
    //     };

    //     context.drawImage(
    //       this.image,
    //       cropbox.position.x,
    //       cropbox.position.y,
    //       cropbox.width,
    //       cropbox.height,
    //       this.position.x,
    //       this.position.y,
    //       this.width,
    //       this.height
    //     );
    //   }
    //   update() {
    //     this.draw();
    //     this.updateFrames();
    //   }

    //   updateFrames() {
    //     this.elapsedFrames++;
    //     if (this.elapsedFrames % this.frameBuffer === 0)
    //       if (this.currentFrame < this.frameRate - 1) this.currentFrame++;
    //       else this.currentFrame = 0;
    //   }
    // }

    // player class
    // class Player extends Sprite {
    //   constructor({
    //     position,
    //     collisionBlocks,
    //     platformCollisionBlocks,
    //     imageSrc,
    //     frameRate,
    //     scale = 0.5,
    //   }) {
    //     super({ imageSrc, frameRate, scale });
    //     this.position = position;
    //     this.velocity = {
    //       x: 0,
    //       y: 1,
    //     };
    //     this.collisionBlocks = collisionBlocks;
    //     this.platformCollisionBlocks = platformCollisionBlocks;
    //     this.hitbox = {
    //       position: {
    //         x: 0,
    //         y: 0,
    //       },
    //       width: 10,
    //       height: 10,
    //     };
    //   }
      
    //   update() {
    //     this.updateFrames();

    //     // player
    //     context.fillStyle = "rgba(0, 255, 0, 0.5)";
    //     context.fillRect(
    //       this.position.x,
    //       this.position.y,
    //       this.width,
    //       this.height
    //     );
    //     // hitbox
    //     context.fillStyle = "rgba(255, 0, 0, 0.5)";
    //     context.fillRect(
    //       this.hitbox.position.x,
    //       this.hitbox.position.y,
    //       this.hitbox.width,
    //       this.hitbox.height
    //     );

    //     this.draw();
    //     this.position.x += this.velocity.x;
    //     this.updateHitBox();
    //     this.checkForHorizontalCollision();

    //     this.applyGravity();
    //     this.checkForVerticalCollision();
    //   }

    //   updateHitBox() {
    //     this.hitbox = {
    //       position: {
    //         x: this.position.x + 9,
    //         y: this.position.y + 12,
    //       },
    //       width: 15,
    //       height: 15,
    //     };
    //   }

    //   checkForHorizontalCollision() {
    //     for (let i = 0; i < this.collisionBlocks.length; i++) {
    //       const block = this.collisionBlocks[i];
    //       if (
    //         collision({
    //           object1: this.hitbox,
    //           object2: block,
    //         })
    //       ) {
    //         if (this.velocity.x > 0) {
    //           this.velocity.x = 0;

    //           const offset =
    //             this.hitbox.position.x - this.position.x + this.hitbox.width;

    //           this.position.x = block.positionxy - offset - 0.01;
    //         }
    //       }
    //       if (this.velocity.x < 0) {
    //         this.velocity.x = 0;

    //         const offset = this.hitbox.position.x - this.position.x;

    //         this.position.x = block.position.x + block.width - offset + 0.01;
    //       }
    //     }
    //   }

    //   applyGravity() {
    //     this.position.y += this.velocity.y;
    //     this.velocity.y += gravity;
    //   }

    //   // check for player & collision intersection

    //   checkForVerticalCollision() {
    //     for (let i = 0; i < this.collisionBlocks.length; i++) {
    //       const block = this.collisionBlocks[i];
    //       if (
    //         collision({
    //           object1: this.hitbox,
    //           object2: block,
    //         })
    //       ) {
    //         if (this.velocity.y > 0) {
    //           this.velocity.y = 0;

    //           const offset =
    //             this.hitbox.position.y + this.hitbox.height - this.position.y;
    //           this.position.y = block.position.y - offset - 0.01;
    //           break;
    //         }
    //       }
    //       if (this.velocity.y < 0) {
    //         this.velocity.y = 0;

    //         const offset = this.hitbox.position.y - this.position.y;
    //         this.position.y = block.position.y + block.height - offset + 0.01;
    //         break;
    //       }
    //     }
    //   }
    // }