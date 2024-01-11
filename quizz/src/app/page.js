import Welcome from "./(pages)/welcome/page.jsx";
import App from "./app.js";
import Login from "./(pages)/login/page.jsx";
import Register from "./(pages)/register/page.jsx";
import Link from "next/link.js";

export default function Home() {
  return (
    <main>
      <div>
        <Welcome />
        <Login />
        <Register />
      </div>
      <App />
      
    </main>
  );
}
