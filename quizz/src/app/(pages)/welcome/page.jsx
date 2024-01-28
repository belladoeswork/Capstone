import Image from "next/image.js";
import logo from "@/assets/codeHero/codeHeroLogo.png";
import Link from "next/link.js";
import CodeHero from "/public/assets/Level1.png";
import Footer from "@/components/Footer.jsx";

export default function Login() {
  //const router = useRouter();

  return (
    <div className="welcome-container">
      <Image src={logo} alt="logo" className="welcome-logo" />
      <h1 className="typed-welcome">Thanks for playing CodeHero</h1>
      <Footer />
    </div>
  );
}

//<Image className="welcome-logo" src={Logo} alt="CodeHero Logo" />
//id="welcomeSpan"
