import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer-basic">
        <div className="socialContainer">
          <div className="social">
            <a href="#">
              <FaGithub />
              <p>Vanessa</p>
            </a>
          </div>
          <div className="social">
            <a href="#">
              <FaGithub />
              <p>Izzy</p>
            </a>
          </div>
          <div className="social">
            <a href="#">
              <FaGithub />
              <p>Elri</p>
            </a>
          </div>
          <div className="social">
            <a href="#">
              <FaGithub />
              <p>Zubedah</p>
            </a>
          </div>
        </div>
        <div>
          <p className="copyright">Hackmyhead Bootcamp Oct 2023 - Jan 2024</p>
        </div>
      </footer>
    </div>
  );
}
