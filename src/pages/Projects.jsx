import React from "react";
import Project_img1 from "../assets/png/enso.png";
import Hawthorn_GC from "../assets/png/hawthorn_3.png";
import Eco_houses from "../assets/png/eco-houses.png";
import Project_camping from "../assets/png/camping_log.png";
import { SiJavascript, SiNodedotjs, SiHtml5, SiMongodb } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaReact, FaSass } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import Card from "../components/shared/Card";
import { ThemeContext } from "../context/DarkModeContext";
import { useContext } from "react";

function Projects() {
  const { darkMode } = useContext(ThemeContext);

  const iconStyles = {
    color: darkMode ? "#fefefe" : "black",

    background: "transparent",
    fontSize: "20px",
    marginRight: "20px",
  };

  const h1Styles = {
    color: darkMode ? "#72addd" : "#72addd",
  };
  const pStyles = {
    color: darkMode ? "white" : "black",
  };
  const btnStyle = {
    color: darkMode ? "white" : "black",
  };

  return (
    <>
      <section
        className={
          darkMode ? "projects-container-dark" : "projects-container-light"
        }
      >
        <div className="sub-header">
          <h1>Portfolio</h1>
          <div className="sub-header_underline"></div>
        </div>
        <div className="all-items">
          <Card reverse={true}>
            <div className="left">
              <div className="project-image">
                <img src={Project_img1} alt="" />
              </div>
            </div>

            <div className="right">
              <h1 style={h1Styles}>Enso Build </h1>
              <p style={pStyles}>
                Enso Build is a building company based in Sydney. Working
                closely with the client in bringing their ideas and business to
                the web.
                <br /> <br />
                Maintaining transparency throughout the project to ensure a
                smooth process from design to deployment. Adopting NextJS to
                bring high performance and SEO optimisation..
              </p>
              <div className="project-buttons">
                <a
                  href="https://www.ensobuild.com.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Live App
                  </button>
                </a>
              </div>
              <div className="project-icons">
                <SiJavascript style={iconStyles} />
                <DiCss3 style={iconStyles} />
                <SiHtml5 style={iconStyles} />
                <TbBrandNextjs style={iconStyles} />
              </div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <div className="project-image">
                <img src={Hawthorn_GC} alt="hawthornGc" />
              </div>
            </div>

            <div className="right">
              <h1 style={h1Styles}>Hawthorn Garden Care</h1>
              <p style={pStyles}>
                Freelance work for a local landscape gardening business based in
                London.
                <br />
                <br />
                Collaborating with the client on their requirements and bringing
                their business to the web. Ensuring client satisfaction
                throughout the project.
              </p>
              <div className="project-buttons">
                <a
                  href="https://github.com/LukeWPhillips/Hawthorn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Code
                  </button>
                </a>

                <a
                  href="https://hawthorngardencare.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Live App
                  </button>
                </a>
              </div>
              <div className="project-icons">
                <SiJavascript style={iconStyles} />
                <FaSass style={iconStyles} />
                <SiHtml5 style={iconStyles} />
                <FaReact style={iconStyles} />
              </div>
            </div>
          </Card>

          <Card reverse={true}>
            <div className="left">
              <div className="project-image">
                <img src={Eco_houses} alt="" />
              </div>
            </div>

            <div className="right">
              <h1 style={h1Styles}>Eco-Housing</h1>
              <p style={pStyles}>
                A marketplace for off grid properties. Something I am passionate
                about, built using Firebase and ReactJS. The biggest challenge
                was user authentication and handling the form data. I overcame
                this by working through the docs on Firebase.
              </p>
              <div className="project-buttons">
                <a
                  href="https://github.com/LukeWPhillips/eco-houses.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Code
                  </button>
                </a>

                <a
                  href="https://lukewphillips.github.io/eco-houses/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Live App
                  </button>
                </a>
              </div>
              <div className="project-icons">
                <SiJavascript style={iconStyles} />
                <SiNodedotjs style={iconStyles} />
                <SiHtml5 style={iconStyles} />
                <FaReact style={iconStyles} />
              </div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <div className="project-image">
                <img src={Project_camping} alt="" />
              </div>
            </div>

            <div className="right">
              <h1 style={h1Styles}>Campsite Log</h1>
              <p style={pStyles}>
                A MERN application that allows users to register and store their
                campsites with full CRUD functionality. Something i've been
                looking for myself, a place to log your adventures. I used MUI
                for some of the design work. I wanted to do a MERN stack to
                challenge myself to more backend skills as well as continuing
                with my React learning.
              </p>
              <div className="project-buttons">
                <a
                  href="https://github.com/LukeWPhillips/Portfolio.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Code
                  </button>
                </a>
                <a
                  href="https://camping-log.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Live App
                  </button>
                </a>
              </div>
              <div className="project-icons">
                <SiJavascript style={iconStyles} />
                <SiNodedotjs style={iconStyles} />
                <SiHtml5 style={iconStyles} />
                <SiMongodb style={iconStyles} />
                <FaReact style={iconStyles} />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Projects;
