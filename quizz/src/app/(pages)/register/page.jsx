"use client";
import { useState } from "react";

import Image from "next/image.js";
//import { useRouter } from "next/navigation.js";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //const router = useRouter();

  /*async function handleRegister(e) {
    e.preventDefault();
    //console.log(username, password);
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
  }*/

  return (
    <div className="login-register-container">
      <p className="login-register-logo"></p>
      <form onSubmit={""}>
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
      <p className="pTag-auth">
        Already a member?
        <a href="" className="signIn-link">
          Sign In
        </a>
      </p>
      <button className="google-button">Sign up with Google</button>
    </div>
  );
}
