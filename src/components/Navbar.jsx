import { FaHome } from "react-icons/fa";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { NavHashLink, HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <HashLink smooth to="/page#home">
          <FaHome className="home-link" />
        </HashLink>
        <li className="nav-item">
          <NavHashLink
            className="link"
            smooth
            to="/page#about"
            activeClassname="active"
          >
            ABOUT ME
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink
            className="link"
            smooth
            to="/page#projects"
            activeClassname="active"
          >
            PROJECTS
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink
            className="link"
            smooth
            to="/page#contact"
            activeClassname="active"
          >
            CONTACT
          </NavHashLink>
        </li>
      </ul>
      <div className="connect-container">
        <div className="github">
          <a
            href="https://github.com/LukeWPhillips"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        </div>
        <div className="linkedin">
          <a href="" target="_blank" rel="noreferrer">
            <SiLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
