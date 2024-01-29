import Link from "next/link.js";
import Image from "next/image.js";

import Logo from "../assets/codeHero/logo1.png";
import { fetchUser } from "@/lib/fetchUser";
import Logout from "./Logout.jsx";

export default async function Navbar() {
  const user = await fetchUser();

  return (
    <div className="navbar-container" id="navbar">
      {user.id && (
        <Link href={"/"}>
          <h1 className="homeHeader">
            Code<span className="changeColor-Span">Hero</span>
          </h1>
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
          <div className="navbar-rightsideMain">
            <Logout />
            <span>
              <h4 className="chaningColors">Welcome {user.username}</h4>
            </span>
            <Link href={"/profile"}>
              <Image
                src={`/${user.avatar}.jpg`}
                alt={"avatar"}
                className="navbarProfile"
                width={50}
                height={50}
              />
            </Link>
          </div>
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
