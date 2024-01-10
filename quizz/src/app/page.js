import Welcome from "./(pages)/welcome/page.jsx";
import Login from "./(pages)/login/page.jsx";
import Register from "./(pages)/register/page.jsx";

export default function Home() {
  return (
    <main>
      <div>
        <Welcome />
        <Login />
        <Register />
      </div>
    </main>
  );
}
