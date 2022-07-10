import { FaHome } from "react-icons/fa";
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
    </nav>
  );
}

export default Navbar;
