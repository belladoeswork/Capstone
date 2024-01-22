import { Sprite } from "./Sprite.jsx";

export class StaticSprite extends Sprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale });
    this.visible = true;
  }

  update() {
    if (!this.visible) return;
    this.draw();
  }
}

export class Rock extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale });
    this.visible = true;
  }
  update() {
    if (!this.visible) return;
    this.draw();
  }
}

export class HiveOne extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale });
    this.visible = true;
  }
  update() {
    if (!this.visible) return;
    this.draw();
  }
}

export class HiveTwo extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale });
    this.visible = true;
  }
  update() {
    if (!this.visible) return;
    this.draw();
  }
}
