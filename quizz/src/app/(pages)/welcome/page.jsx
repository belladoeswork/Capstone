import Image from "next/image.js";
import Logo from "../../../assets/codeHero/logo1.png";
import Link from "next/link.js";

export default function Login() {
  //const router = useRouter();

  return (
    <div className="welcome-container ">
      <Image className="welcome-logo" src={Logo} alt="CodeHero Logo" />

      <h3>
        Welcome to <span id="welcomeSpan">CodeHero</span>
      </h3>
      <Link href={"/login"} id="welcomeBtn">
        Login
      </Link>
    </div>
  );
}
