import Image from "next/image.js";
import logo from "@/assets/codeHero/codeHeroLogo.png";
import Link from "next/link.js";
import CodeHero from "/public/assets/Level1.png";

export default function Login() {
  //const router = useRouter();

  return (
    <div className="welcome-container ">
      <Image src={logo} alt="logo" className="welcome-logo" />

      <h3>Thanks for playing</h3>
      <h1 className="typed-welcome">CodeHero</h1>
    </div>
  );
}

//<Image className="welcome-logo" src={Logo} alt="CodeHero Logo" />
//id="welcomeSpan"
