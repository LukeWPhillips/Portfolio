import React from "react";
import Project_img1 from "../assets/png/meal-finder.png";
import Project_spotify from "../assets/png/spotify3.png";
import Project_marketplace from "../assets/png/house-marketplace.png";
import Project_yelpcamp from "../assets/png/yelpcamp.png";

import {
  SiJavascript,
  SiNodedotjs,
  // SiGithub,
  SiHtml5,
  SiMongodb,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaGitAlt, FaNpm, FaReact } from "react-icons/fa";
import Card from "../components/shared/Card";

function Projects() {
  const iconStyles = {
    color: "#fefefe",
    background: "transparent",
    fontSize: "20px",
    marginRight: "20px",
  };

  return (
    <>
      <section className="projects-container">
        <header className="sub-header">Projects</header>
        <div className="all-items">
          <Card reverse={true}>
            <div className="left">
              <div className="project-image">
                <img src={Project_img1} alt="" />
              </div>
            </div>

            <div className="right">
              <h1>Meal Finder</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptate et dolorem molestiae fuga, molestias consectetur neque
                deleniti, rem nulla eum dolore ducimus ipsam maiores expedita
                velit. Autem, recusandae non.
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
              <h1>Spotify Clone</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptate et dolorem molestiae fuga, molestias consectetur neque
                deleniti, rem nulla eum dolore ducimus ipsam maiores expedita
                velit. Autem, recusandae non.
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
                <img src={Project_marketplace} alt="" />
              </div>
            </div>

            <div className="right">
              <h1>House Marketplace</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptate et dolorem molestiae fuga, molestias consectetur neque
                deleniti, rem nulla eum dolore ducimus ipsam maiores expedita
                velit. Autem, recusandae non.
              </p>
              <div className="project-buttons">
                <a
                  href="https://github.com/LukeWPhillips/House-Marketplace.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Code</button>
                </a>

                <a
                  href="https://lukewphillips.github.io/House-Marketplace/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn">Live App</button>
                </a>
              </div>
              <div className="project-icons">
                <SiJavascript
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",

                    marginRight: "20px",
                  }}
                />
                <SiNodedotjs
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",

                    marginRight: "20px",
                  }}
                />
                <SiHtml5
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",
                    marginRight: "20px",
                  }}
                />
                <FaReact
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",
                    marginRight: "20px",
                  }}
                />
              </div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <div className="project-image">
                <img src={Project_yelpcamp} alt="" />
              </div>
            </div>

            <div className="right">
              <h1>Project 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptate et dolorem molestiae fuga, molestias consectetur neque
                deleniti, rem nulla eum dolore ducimus ipsam maiores expedita
                velit. Autem, recusandae non.
              </p>
              <div className="project-buttons">
                <button className="btn">Code</button>

                <button className="btn">Live App</button>
              </div>
              <div className="project-icons">
                <SiJavascript
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",

                    marginRight: "20px",
                  }}
                />
                <SiNodedotjs
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",

                    marginRight: "20px",
                  }}
                />
                <SiHtml5
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",
                    marginRight: "20px",
                  }}
                />
                <SiMongodb
                  style={{
                    color: "#fefefe",
                    background: "transparent",
                    fontSize: "20px",
                    marginRight: "20px",
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Projects;
