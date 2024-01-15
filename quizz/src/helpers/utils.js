import React from "react";

//obj1=player, obj2=block

export default function collision({ object1, object2 }) {
  return (
    object1.position.y + object1.height >= object2.position.y &&
    object1.position.y <= object2.position.y + object2.height &&
    object1.position.x <= object2.position.x + object2.width &&
    object1.position.x + object1.width >= object2.position.x
  );
}

// export default function platformCollision({ object1, object2 }) {
//     return (
//       object1.position.y + object1.height >= object2.position.y &&
//       object1.position.y + object1.height <=
//         object2.position.y + object2.height &&
//       object1.position.x <= object2.position.x + object2.width &&
//       object1.position.x + object1.width >= object2.position.x
//     )
//   }
