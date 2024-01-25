"use client";
import { useState } from "react";
import { useRouter } from "next/navigation.js";

import Image from "next/image.js";
import Logo from "../../../assets/codeHero/codeHeroLogo.png";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    console.log(username, password);
    //send a rewuest to the server
    //api/users/register
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/type" },
      body: JSON.stringify({ username, password }),
    });
    const info = await response.json();
    if (info.error) {
      return setError(info.error);
    }
    //console.log(info);
    router.push("/");
    router.refresh();
  }

  return (
    <div className="login-register-container">
      <Image className="login-register-logo" src={Logo} alt="CodeHero Logo" />
      <h1 className="typed-login">Welcome to CodeHero</h1>

      <form onSubmit={handleRegister}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username.."
          className="auth-input-field"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password.."
          type="password"
          className="auth-input-field"
        />
        <button className="login-register-button">Register</button>
      </form>
      <p className="signIn-link">
        Already a member?
        <a href="/login" className="signIn-link">
          Login
        </a>
      </p>
      <p className="signIn-link">or</p>
      <button className="google-button">Sign up with Google</button>
    </div>
  );
}

/**/
