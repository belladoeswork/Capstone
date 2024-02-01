import Confetti from "react-confetti";

export default function ConfettiPage() {
  const confettiColors = ["#623B5A", "#2274a5", "#F2F5FF"];

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={200}
      colors={confettiColors}
      opacity={0.8} 
      gravity={0.1} 
      wind={0} 
      recycle={false} 
      drawShape={(ctx) => {
        const rectWidth = 8;
        const rectHeight = 20;

        ctx.beginPath();
        ctx.rect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
        ctx.closePath();
        ctx.fill();
      }}
      style={{ zIndex: 200 }}
    />
  );
}


