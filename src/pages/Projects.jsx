import React from "react";
import Project_img1 from "../assets/png/meal-finder.png";
import Project_spotify from "../assets/png/spotify3.png";
import Eco_houses from "../assets/png/eco-houses.png";
import Project_camping from "../assets/png/camping_log.png";
import { SiJavascript, SiNodedotjs, SiHtml5, SiMongodb } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import Card from "../components/shared/Card";

function Projects() {
  const iconStyles = {
    color: "#fefefe",
    background: "transparent",
    fontSize: "20px",
    marginRight: "20px",
  };

  const h1Styles = {
    color: "#72addd",
  };

  return (
    <>
      <section className="projects-container">
        <div className="sub-header">
          <h1>Projects</h1>
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
              <h1 style={h1Styles}>Meal Finder</h1>
              <p>
                The implementation was done in Vanilla JS. It is a static
                website, but uses a RESTful API for the meals and ingredients. A
                clean, user friendly layout using CSS and VanillaJS. I wanted to
                do something to practice making fetch requests.
              </p>
              <div className="project-buttons">
                <a
                  href="https://github.com/LukeWPhillips/Meal-Finder.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Code</button>
                </a>

                <a
                  href="https://lukewphillips.github.io/Meal-Finder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Live App</button>
                </a>
              </div>
              <div className="project-icons">
                <SiJavascript style={iconStyles} />
                <DiCss3 style={iconStyles} />
                <SiHtml5 style={iconStyles} />
              </div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <div className="project-image">
                <img src={Project_spotify} alt="" />
              </div>
            </div>

            <div className="right">
              <h1 style={h1Styles}>Spotify Clone</h1>
              <p>
                This project is a clone of the Spotify main page. My focus was
                to further my CSS layout skills using Flexbox. The main
                challenge was setting out all the content and making it
                responsive for different window sizes using media queries. I
                also decided to add a functioning playbar and localStorage
                capabiltiy.
              </p>
              <div className="project-buttons">
                <a
                  href="https://github.com/LukeWPhillips/Spotify-clone.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Code</button>
                </a>

                <a
                  href="https://lukewphillips.github.io/Spotify-clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Live App</button>
                </a>
              </div>
              <div className="project-icons">
                <SiJavascript style={iconStyles} />
                <DiCss3 style={iconStyles} />
                <SiHtml5 style={iconStyles} />
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
              <p>
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
                  <button className="btn">Code</button>
                </a>

                <a
                  href="https://lukewphillips.github.io/eco-houses/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Live App</button>
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
              <p>
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
                  <button className="btn">Code</button>
                </a>
                <a
                  href="https://camping-log.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Live App</button>
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
