import {
  floorCollisions,
  platformCollisions,
  floorCollisions1,
  platformCollisions1,
  floorCollisions2,
  platformCollisions2,
} from "./Collisions.js";


export const levelData = [
  {
    mapImage: "/assets/map1.png",
    floorCollisions: floorCollisions,
    platformCollisions: platformCollisions,
  },
  
  {
    mapImage: "/assets/map2.png",
    floorCollisions: floorCollisions1,
    platformCollisions: platformCollisions1,
  },

  {
    mapImage: "/assets/map3.png",
    floorCollisions: floorCollisions2,
    platformCollisions: platformCollisions2,
  },
];
