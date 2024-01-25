//import Link from "next/link.js";
import Image from "next/image.js";

export default function NextLevelTransition() {
  return (
    <div className="gif-nextLevel">
      <Image
        src="/assets/vids/nextLevel.gif"
        alt="next level video"
        width={200}
        height={120}
      />
    </div>
  );
}
