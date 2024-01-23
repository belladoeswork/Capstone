import Link from "next/link.js";
import { useRouter } from "next/navigation.js";

import React, { useState, useEffect } from "react";
import PlayerSelection from "./PlayerSelection.jsx";
import GameLevel1 from "../app/(pages)/game/page.jsx";



export default function Game() {
  const router = useRouter();
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  


  useEffect(() => {
    if (!selectedPlayerData) {
      router.push('/game');
    }
  }, []);

  const handlePlayerSelect = (playerData) => {
    setSelectedPlayerData(playerData);
    setGameStarted(true);
  };

  return (
    <div>
      {/* <Link href={"/game"}>game </Link> */}
      {!gameStarted && <PlayerSelection onPlayerSelect={handlePlayerSelect} />}

      {gameStarted && selectedPlayerData && (
        <GameLevel1 selectedPlayerData={selectedPlayerData} />
      )}
    </div>
  );
}




// import PlayerSelection from "@/components/PlayerSelection.jsx";

// export default function selectionPage() {
//   return <PlayerSelection />;
// }

// export default function Game() {
//   const [gameStarted, setGameStarted] = useState(false);
//   const [selectedPlayerData, setSelectedPlayerData] = useState(null);

//   const handlePlayerSelect = (playerData) => {
//     setSelectedPlayerData(playerData);
//     setGameStarted(true);
//   };

//   return (
//     <>
//       {!gameStarted && (
//         <PlayerSelection onPlayerSelect={handlePlayerSelect} />
//       )}

//       {gameStarted && selectedPlayerData && (
//         <GameLevel1 selectedPlayerData={selectedPlayerData} />
//       )}
//     </>
//   );
// }
