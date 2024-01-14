import React from "react";

//obj1=player, obj2=collisionblock

export default function collision({
    object1, object2
}) {
    return (
        object1.position.x*4 <= object2.position.x*4 + object2.width*4 &&
            object1.position.x*4 + object1.width*4 >= object2.position.x*4 &&
            object1.position.y*4 <= object2.position.y*4 + object2.height*4 &&
            object1.position.y*4 + object1.height*4 >= object2.position.y*4
    )
}