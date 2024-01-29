import { Sprite } from "./Sprite.jsx";

export class StaticSprite extends Sprite {
  constructor({ position, context, imageSrc, scale = 0.5, key }) {
    super({ position, imageSrc, context, scale });
    // this.visible = true;
    this.key = key;
  }

  //   update(interactedItems) {
  //     if (interactedItems && interactedItems[this.key]) {
  //       this.visible = false;
  //     }

  //     if (!this.visible) return;
  //     this.draw();
  //   }
}

export class Rock extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "rock" });
  }
}

export class HiveOne extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "hiveOne" });
  }
}

export class Worm extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    const frameRate = 9;
    const frameBuffer = 3;
    super({
      position,
      imageSrc,
      context,
      scale,
      key: "worm",
      frameRate,
      frameBuffer,
    });
  }
}

export class Cat extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "cat" });
  }
}

export class RockThree extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "rock" });
  }
}

export class Moon extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "moon" });
  }
}

export class Box extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "box" });
  }
}
