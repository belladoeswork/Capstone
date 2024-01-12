"use client"


// import Sprite from "../components/object-graphics/Sprite.js";
import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC } from "../helpers/consts.js";
import RenderLevel from "../components/data/RenderLevel.js";



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
            return <RenderLevel spriteSheetImage={spriteSheetImage} />;
            </div>
    )
}