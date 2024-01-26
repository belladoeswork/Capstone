import { Sprite } from "./Sprite.jsx";


export class ExtraProp {
  constructor(context) {
    this.frameX = 0;
    this.frameY = 0;
    this.context = context;
    this.fps = 20;
    this.frameInterval = 100 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
    this.ready = false;
  }

  draw() {
    if (this.ready) {
      this.context.drawImage(
        this.image,
        this.frameX * this.width,

        0,
        this.width,
        this.height,

        this.x,
        this.y,
        this.width / 4,
        this.height / 4
      );
    } else {
      this.context.fillRect(this.x, this.y, this.width, this.height);

      this.context.strokeStyle = "rgba(255, 0, 0, 1)";
      this.context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
  update(deltaTime) {
    this.x -= this.speedX;
    this.y += this.speedY;

    //animation
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
    } else {
      this.frameTimer += deltaTime;
    }

    // off the screeN?
    if (this.x + this.width < 0) {
      this.markedForDeletion = true;
    }
  }
}

export class Bee extends Sprite {
  constructor({ canvas, context }) {
    super({
      position: { x: canvas.width + Math.random() * canvas.width * 0.5, y: Math.random() * canvas.height * 0.5 },
      context,
      imageSrc: "/assets/bee.png",
      frameRate: 4,
      scale: 0.5,
      animations: {
        Fly: {
          imageSrc: "/assets/bee.png",
          frameRate: 4,
          frameBuffer: 3,
        },
      },
    });

    this.speedX = 2;
    this.speedY = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.loaded = true;


    this.image.onload = () => {
      console.log("Bee image loaded");
      this.width = this.image.width / this.frameRate * this.scale;
      this.height = this.image.height * this.scale;
    };
  }

  update(deltaTime) {
    console.log("Updating bee");
    super.update();
    this.updateFrames();
    this.position.x -= this.speedX;
    this.position.y += this.speedY;

    if (this.position.x + this.width < 0) {
      this.markedForDeletion = true;
    }
  }

  draw() {
    console.log("Drawing bee");
    if (this.loaded) {
      super.draw();
    }
  }
}