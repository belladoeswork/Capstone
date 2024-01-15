import Link from "next/link.js";


export default function App() {
  return (
    <div >
          <div >
        <script src="./collisions.js"></script>
        <script src="./helpers/utils.js"></script>
        <Link href={"/game"} >
          Game
        </Link>
      </div>
    </div>
  );
}
