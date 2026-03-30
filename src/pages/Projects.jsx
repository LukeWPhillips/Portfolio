import React from "react";
import Hawthorn_GC from "../assets/png/hawthorn_3.png";
import makerspath from "../assets/png/mkrs4.png";
import Lp from "../assets/png/lp3.png";
import Eco_houses from "../assets/png/eco-houses.png";
import Project_camping from "../assets/png/camping_log.png";
import {
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiStripe } from "react-icons/si";
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
    fontSize: "30px",
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
              <a
                href="https://themakerspath.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-image">
                  <img src={makerspath} alt="project-img" />
                </div>
              </a>
            </div>

            <div className="right">
              <h1 style={h1Styles}>The Makers Path </h1>
              <p style={pStyles}>
                Project for a platform celebrating the independent makers and
                creatives of Devon. Connecting users with local businesses,
                regional events and handmade products — giving crafters a place
                to showcase and sell their work online. Built with Next.js,
                TypeScript and Tailwind CSS, with custom REST APIs and Stripe
                integrated for secure payment processing.
              </p>
              <div className="project-buttons">
                <a
                  href="https://themakerspath.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Live App
                  </button>
                </a>
              </div>
              <div className="project-icons">
                <div className="project-icons">
                  <TbBrandNextjs style={iconStyles} />
                  <SiTypescript style={iconStyles} />
                  <SiTailwindcss style={iconStyles} />
                  <SiStripe style={iconStyles} />
                  <SiSupabase style={iconStyles} />
                  <SiNodedotjs style={iconStyles} />
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <a
                href="https://lp-plumbing.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-image">
                  <img src={Lp} alt="lp-plumbing" />
                </div>
              </a>
            </div>

            <div className="right">
              <h1 style={h1Styles}>LP - Plumbing</h1>
              <p style={pStyles}>
                Built a responsive website for LP Plumbing using Next.js,
                Tailwind CSS, and TypeScript, showcasing services, company
                information, and contact functionality for a local plumbing
                business.
              </p>
              <div className="project-buttons">
                <a
                  href="https://lp-plumbing.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Code
                  </button>
                </a>

                <a
                  href="https://lp-plumbing.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={btnStyle} className="btn">
                    Live App
                  </button>
                </a>
              </div>
              <div className="project-icons">
                <SiTypescript style={iconStyles} />
                <SiTailwindcss style={iconStyles} />
                <TbBrandNextjs style={iconStyles} />
              </div>
            </div>
          </Card>

          <Card reverse={true}>
            <div className="left">
              <a
                href="https://lukewphillips.github.io/eco-houses/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-image">
                  <img src={Eco_houses} alt="" />
                </div>
              </a>
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
              <a
                href="https://camping-log.onrender.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-image">
                  <img src={Project_camping} alt="" />
                </div>
              </a>
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
