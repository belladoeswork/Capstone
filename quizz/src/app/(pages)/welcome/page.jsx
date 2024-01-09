"use client";

import { useState } from "react";
import Image from "next/image.js";

export default function Login() {
  //const router = useRouter();

  return (
    <div className="welcome-container ">
      <p className="login-register-logo">Image go here</p>

      <h1>
        Welcome to <span>Code Hero</span>
      </h1>
      <button className="login-register-button">Login</button>

      <button className="google-button">Sign in with Google</button>
      <p className="pTag-auth">
        Not yet a member?
        <a href="" className="pTag-auth">
          {" "}
          Sign Up
        </a>
      </p>
    </div>
  );
}
