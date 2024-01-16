import Link from "next/link.js";
import Image from "next/image.js";

import Logo from "../assets/codeHero/logo1.png";
import { fetchUser } from "@/lib/fetchUser";
import Logout from "./Logout.jsx";

export default async function Navbar() {
  const user = await fetchUser();

  return (
    <div className="navbar-container">
      {user.id && (
        <Link href={"/"}>
          <h1 className="homeHeader">CodeHero</h1>
        </Link>
      )}

      <div className="navbarRight">
        {!user.id && (
          <>
            <Link href={"/login"} className="navTab">
              Login
            </Link>
            <Link href={"/register"} className="navTab">
              Register
            </Link>
          </>
        )}
        {user.id && (
          <>
            <span>
              <Link className="navbarRight" href={"/profile"}>
                Welcome {user.username}
              </Link>
            </span>
            <Logout />
          </>
        )}
      </div>
    </div>
  );
}

/*<div className="navbar-container">
      <Link href={"/"}>
        <h1 className="homeHeader">
          CodeHero
          
          </h1>
          </Link>
    
          <div className="navbarRight">
            <>
              <Link href={"/login"} className="navTab">
                Login
              </Link>
              <Link href={"/register"} className="navTab">
                Register
              </Link>
            </>
    
            <Link href={"/welcome"} className="navTab">
              Logout
            </Link>
            {user.id && (
              <span>
                <Link href={"/profile"}>Welcome {user.username} </Link>
              </span>
            )}
          </div>
        </div>
      );*/
