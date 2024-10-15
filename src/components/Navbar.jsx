import { BsHexagonFill } from "react-icons/bs";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdOutlineSegment } from "react-icons/md";
import { NavHashLink, HashLink } from "react-router-hash-link";
import * as React from "react";
import Box from "@mui/material/Box";
import { GiEclipse } from "react-icons/gi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState, useContext } from "react";

import { ThemeContext } from "../context/DarkModeContext";

// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // ----- DARK MODE TOGGLE -----

  const [checked, setChecked] = useState(false);

  const { toggleDarkMode, darkMode } = useContext(ThemeContext);

  const onClick = () => {
    toggleDarkMode();
  };

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon className="list-container">
              <HashLink smooth to="/page#home">
                <GiEclipse className="home-link" />
              </HashLink>
              <li className="nav-item">
                <NavHashLink
                  style={linkStyle}
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
                  style={linkStyle}
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
                  style={linkStyle}
                  className="link"
                  smooth
                  to="/page#contact"
                  activeClassname="active"
                >
                  CONTACT
                </NavHashLink>
              </li>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <nav className="nav-container">
        <ul className="nav-items">
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
              <a
                href="https://www.linkedin.com/in/luke-w-phillips/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
            </div>
          </div>
          {/* <div className="switch">
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                className="top-dark-mode-button"
                label={` ${checked ? "LIGHT" : "DARK"}`}
              />
            </FormGroup>
          </div> */}
          {/* <div
            className="top-dark-mode-button"
            onChange={toggleChecked}
            onClick={onClick}
          >
            {" "}
            <button className={darkMode === true ? "dark" : "light"}></button>
          </div> */}

          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <MdOutlineSegment
                onClick={toggleDrawer(anchor, true)}
                id="dots-menu"
              >
                {anchor}
              </MdOutlineSegment>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

//
// <ul className="nav-items">
//   <HashLink smooth to="/page#home">
//     <FaHome className="home-link" />
//   </HashLink>
//   <li className="nav-item">
//     <NavHashLink
//       className="link"
//       smooth
//       to="/page#about"
//       activeClassname="active"
//     >
//       ABOUT ME
//     </NavHashLink>
//   </li>
//   <li className="nav-item">
//     <NavHashLink
//       className="link"
//       smooth
//       to="/page#projects"
//       activeClassname="active"
//     >
//       PROJECTS
//     </NavHashLink>
//   </li>
//   <li className="nav-item">
//     <NavHashLink
//       className="link"
//       smooth
//       to="/page#contact"
//       activeClassname="active"
//     >
//       CONTACT
//     </NavHashLink>
//   </li>
// </ul>
