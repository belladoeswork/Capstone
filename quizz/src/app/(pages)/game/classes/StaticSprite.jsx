import { Sprite } from "./Sprite.jsx";

// export class StaticSprite extends Sprite {
//   constructor({ position, context, imageSrc, scale = 0.5 }) {
//     super({ position, imageSrc, context, scale });
//     this.visible = true;
//   }

//   update() {
//     if (!this.visible) return;
//     this.draw();
//   }
// }

export class StaticSprite extends Sprite {
  constructor({ position, context, imageSrc, scale = 0.5, key }) {
    super({ position, imageSrc, context, scale });
    this.visible = true;
    this.key = key; // Unique key to identify the sprite
  }

  update(interactedItems) {
    // Check if this item has been interacted with
    if (interactedItems && interactedItems[this.key]) {
      this.visible = false;
    }

    if (!this.visible) return;
    this.draw();
  }
}

export class Rock extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "rock" });
    // this.visible = true;
  }
  // update() {
  //   if (!this.visible) return;
  //   this.draw();
  // }
}

export class HiveOne extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "hiveOne" });
    // this.visible = true;
  }
  // update() {
  //   if (!this.visible) return;
  //   this.draw();
  // }
}

export class HiveTwo extends StaticSprite {
  constructor({ position, context, imageSrc, scale = 0.5 }) {
    super({ position, imageSrc, context, scale, key: "hiveTwo" });
    // this.visible = true;
  }
  // update() {
  //   if (!this.visible) return;
  //   this.draw();
  // }
}
