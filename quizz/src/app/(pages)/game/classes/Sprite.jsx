// import React from 'react';
    

// // sprite class
//    export class Sprite {
//         constructor({ position, context, imageSrc }) {
//           this.position = position;
//           this.image = new Image();
//           this.image.src = imageSrc;
//           this.context = context;
//           this.imageLoaded = false;
//           this.image.onload = () => {
//             this.imageLoaded = true;
//             this.scale = Math.max(
//               canvas.width / this.image.width,
//               canvas.height / this.image.height
//             );
//             this.position.y = canvas.height - this.image.height * this.scale;
//           };
//         }
  
//         draw() {
//           if (!this.image) return;
//           context.drawImage(
//             this.image,
//             this.position.x,
//             this.position.y,
//             //   canvas.width,
//             //   canvas.height
//             this.image.width * this.scale,
//             this.image.height * this.scale
//           );
//         }
//         update() {
//           this.draw();
//         }
//       }