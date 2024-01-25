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

export class Bee extends ExtraProp {
  constructor({ canvas, context }) {
    super(context);
    this.x = 100;
    this.y = 350;
    this.image = new Image();
    this.image.src = "/assets/bee.png";

    this.image.onload = () => {
      console.log("Bee image loaded");
      this.ready = true;
      this.width = this.image.width;
      this.height = this.image.height;

      this.x = canvas.width + Math.random() * canvas.width * 0.5;

      this.y = Math.random() * canvas.height * 0.5;
      this.speedX = 2;
      this.speedY = 0;
      this.maxFrame = 3;
    };
  }

  update(deltaTime) {
    super.update(deltaTime);
  }
}
