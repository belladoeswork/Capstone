import Navbar from "@/components/Navbar.jsx";
import Game from "@/components/Game.jsx";
// import App from "./app.js";



export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>CodeHero</h1>
      <Game />
      {/* <App /> */}
    </main>
  );
}
