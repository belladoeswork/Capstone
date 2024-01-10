import Link from "next/link.js";
import Image from "next/image.js";

import Logo from "../assets/codeHero/logo1.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link href={"#"}>
        <Image className="logo" src={Logo} alt="CodeHero Logo" />
      </Link>

      <div className="navbarRight">
        <Link href={"/login"} className="navTab">
          Login
        </Link>
        <Link href={"/register"} className="navTab">
          Register
        </Link>
        <Link href={"/welcome"} className="navTab">
          Logout
        </Link>
      </div>
    </div>
  );
}
