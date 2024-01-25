// import { useEffect, useState, useRef } from 'react';

// export default function AnimatedPlayer({ imageSrc, frameRate, frameBuffer }) {
//   const [frameIndex, setFrameIndex] = useState(0);
//   const intervalId = useRef();

//   useEffect(() => {
//     intervalId.current = setInterval(() => {
//       setFrameIndex((prevFrameIndex) => (prevFrameIndex + 1) % frameBuffer);
//     }, 1000 / frameRate);

//     return () => {
//       clearInterval(intervalId.current);
//     };
//   }, [frameRate, frameBuffer]);

//   const frameWidth = 100; // adjust this to the width of each frame
//   const imageStyle = {
//     width: frameBuffer * frameWidth,
//     marginLeft: -frameIndex * frameWidth,
//   };

//   return <img src={imageSrc} alt="Player" style={imageStyle} />;
// }