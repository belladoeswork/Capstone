"use client"


// import Sprite from "../components/object-graphics/Sprite.js";
import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC } from "../helpers/consts.js";
import RenderLevel from "../components/level-layout/RenderLevel.js";



export default function App() {

    const [spriteSheetImage, setSpriteSheetImage] = useState(null);
 
   useEffect(() => {
     const image = new Image();
     image.src = SPRITE_SHEET_SRC;
     image.onload = () => {
       setSpriteSheetImage(image);
     };
   }, []);
 
   if (!spriteSheetImage) {
     return null;
   }


    return (
        <div>
            <p>The root of the game</p>
{/* 
        <Sprite image={spriteSheetImage} frameCoord={"1x0"} />
       <Sprite image={spriteSheetImage} frameCoord={"0x2"} />
            <Sprite image={spriteSheetImage} frameCoord={"0x3"} /> */}
            return <RenderLevel spriteSheetImage={spriteSheetImage} />;
            </div>
    )
}