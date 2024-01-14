// import React from 'react';


// // player class
// export class Player {
//     constructor({position, context}) {
//       this.position = position;
//       this.context = context;
//       this.velocity = {
//         x: 0,
//         y: 1,
//       };
//       this.height = 100;
//     }
//     draw() {
//       context.fillStyle = "red";
//       context.fillRect(this.position.x, this.position.y, 100, this.height);
//     }
//     update() {
//       this.draw();
//       this.position.x += this.velocity.x;
//       this.position.y += this.velocity.y;
//       if (this.position.y + this.height + this.velocity.y < canvas.height)
//         this.velocity.y += gravity;
//       else this.velocity.y = 0;
//     }
//   }