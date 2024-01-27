import { useState, useEffect, useRef } from "react";
import Game from "./Game.jsx";
import { Sprite } from "../app/(pages)/game/classes/Sprite.jsx";

const playerData = {
  huntress: {
    animations: {
      Idle: {
        imageSrc: "/assets/huntress/Idle.png",
        frameRate: 8,
        frameBuffer: 3,
      },
      Run: {
        imageSrc: "/assets/huntress/Run.png",
        frameRate: 8,
        frameBuffer: 5,
      },
      Jump: {
        imageSrc: "/assets/huntress/Jump.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      Fall: {
        imageSrc: "/assets/huntress/Fall.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      FallLeft: {
        imageSrc: "/assets/huntress/FallLeft.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      RunLeft: {
        imageSrc: "/assets/huntress/RunLeft.png",
        frameRate: 8,
        frameBuffer: 5,
      },
      IdleLeft: {
        imageSrc: "/assets/huntress/IdleLeft.png",
        frameRate: 8,
        frameBuffer: 3,
      },
      JumpLeft: {
        imageSrc: "/assets/huntress/JumpLeft.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      AttackLeft: {
        imageSrc: "/assets/huntress/AttackLeft.png",
        frameRate: 5,
        frameBuffer: 3,
      },
      AttackRight: {
        imageSrc: "/assets/huntress/AttackRight.png",
        frameRate: 5,
        frameBuffer: 3,
      },
      Death: {
        imageSrc: "/assets/huntress/Death.png",
        frameRate: 8,
        frameBuffer: 3,
      },
    },
    // interactedItems: interactedItems,
    // currentItem: currentItem,
  },

  warrior: {
    animations: {
      Idle: {
        imageSrc: "/assets/warrior/Idle.png",
        frameRate: 8,
        frameBuffer: 3,
      },
      Run: {
        imageSrc: "/assets/warrior/Run.png",
        frameRate: 8,
        frameBuffer: 5,
      },
      Jump: {
        imageSrc: "/assets/warrior/Jump.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      Fall: {
        imageSrc: "/assets/warrior/Fall.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      FallLeft: {
        imageSrc: "/assets/warrior/FallLeft.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      RunLeft: {
        imageSrc: "/assets/warrior/RunLeft.png",
        frameRate: 8,
        frameBuffer: 5,
      },
      IdleLeft: {
        imageSrc: "/assets/warrior/IdleLeft.png",
        frameRate: 8,
        frameBuffer: 3,
      },
      JumpLeft: {
        imageSrc: "/assets/warrior/JumpLeft.png",
        frameRate: 2,
        frameBuffer: 3,
      },
      Attack: {
        imageSrc: "/assets/warrior/Attack1.png",
      },
      AttackLeft: {
        imageSrc: "/assets/warrior/AttackLeft.png",
        frameRate: 4,
        frameBuffer: 3,
      },
      AttackRight: {
        imageSrc: "/assets/warrior/AttackRight.png",
        frameRate: 4,
        frameBuffer: 3,
      },
      Death: {
        imageSrc: "/assets/warrior/Death.png",
        frameRate: 8,
        frameBuffer: 3,
      },
    },
    // interactedItems: interactedItems,
    // currentItem: currentItem,
  },
};

export default function playerSelection({ onPlayerSelect }) {
  // const [currentItem, setCurrentItem] = useState(null);
  // const [interactedItems, setInteractedItems] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  const canvasRef1 = useRef(null);
  const spriteRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const spriteRef2 = useRef(null);

  useEffect(() => {
    const canvas1 = canvasRef1.current;
    const context1 = canvas1.getContext("2d");

    spriteRef1.current = new Sprite({
      position: { x: 0, y: 0 },
      ...playerData.huntress.animations.Idle,
      context: context1,
    });

    const canvas2 = canvasRef2.current;
    const context2 = canvas2.getContext("2d");

    spriteRef2.current = new Sprite({
      position: { x: 0, y: 0 },
      ...playerData.warrior.animations.Idle,
      context: context2,
    });

    const animate = () => {
      context1.clearRect(0, 0, canvas1.width, canvas1.height);
      spriteRef1.current.update();
      context2.clearRect(0, 0, canvas2.width, canvas2.height);
      spriteRef2.current.update();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
    const data = playerData[player];
    setSelectedPlayerData(data);
  };

  useEffect(() => {
    if (selectedPlayerData) {
      onPlayerSelect(selectedPlayerData);
    }
  }, [selectedPlayerData]);

  return (
    <div className="container-box">
      <div className="player-selection">
        <h1 className="title"> Select a Player</h1>
        <div className="box">
          <div className="character-box">
            <canvas ref={canvasRef1} width="100" height="100"></canvas>
            <button onClick={() => handlePlayerSelect("huntress")}>
              Select Huntress
            </button>
          </div>
          <div className="character-box">
            <canvas ref={canvasRef2} width="100" height="100"></canvas>
            <button onClick={() => handlePlayerSelect("warrior")}>
              Select Warrior
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
