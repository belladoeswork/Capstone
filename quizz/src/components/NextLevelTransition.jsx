//import Link from "next/link.js";
import Image from "next/image.js";

export default function NextLevelTransition() {
  return (
    <div
      className="gif-nextLevel"
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "1000",
      }}
    >
      <Image
        src="/assets/vids/nextLevel.gif"
        alt="next level video"
        width={1050}
        height={700}
      />
    </div>
  );
}
