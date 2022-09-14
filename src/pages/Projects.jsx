import React from "react";
import Project_img1 from "../assets/png/meal-finder.png";
import Project_spotify from "../assets/png/spotify3.png";
import Project_marketplace from "../assets/png/house-marketplace.png";
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
        <header className="sub-header">Projects</header>
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
                This app uses a third party API to seach for meals and displays
                the meal along with instructions and ingredients. A pretty basic
                layout using css and vanillaJS. I wanted to do something to
                practice my javascript skills whilst making fetch request.
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
                This project was about focusing on my css ability and attempting
                to replicate Spotify's main page. I also added in some
                javascript functionality with the playbar and localstorage. I
                found it a challenge getting the layout correct but perservered
                and i think it turned out ok.
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
              <h1 style={h1Styles}>House Marketplace</h1>
              <p>
                A marketplace where people can list their property for rent or
                sale. Using Firebase as the backend and React for the frontend.
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
                  href="https://phillipscampingapp.herokuapp.com/"
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
