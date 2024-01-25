import Confetti from "react-confetti";

export default function ConfettiPage() {
  const confettiColors = ["#623B5A", "#2274a5", "#F2F5FF"];

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={200}
      colors={confettiColors}
      opacity={0.8} // Adjust the opacity for a softer look
      gravity={0.1} // Adjust the gravity for how fast the confetti falls
      wind={0} // Adjust the wind for horizontal movement
      recycle={false} // Set to true for continuous confetti animation
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

/* drawShape={(ctx) => {
        ctx.beginPath();
        ctx.moveTo(12, 6);
        ctx.arc(6, 6, 6, 0, 2 * Math.PI);
        ctx.moveTo(46, 6);
        ctx.arc(40, 6, 6, 0, 2 * Math.PI);
        ctx.moveTo(0, 6);
        ctx.bezierCurveTo(6, 36, 46, 36, 46, 6);
        ctx.bezierCurveTo(46, 0, 34, -2, 34, 6);
        ctx.bezierCurveTo(34, 20, 12, 20, 12, 6);
        ctx.bezierCurveTo(12, 0, 0, 0, 0, 6);
        ctx.closePath();
        ctx.stroke();
      }}*/
