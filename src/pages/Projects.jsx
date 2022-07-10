import React from "react";
// import { Link } from "react-router-dom";
import Project_img1 from "../assets/jpg/project-background1.jpg";
import {
  SiJavascript,
  SiNodedotjs,
  // SiGithub,
  SiHtml5,
  // SiMongodb,
} from "react-icons/si";
import Card from "../components/shared/Card";

function Projects() {
  // const onclick = (e) => {
  //   window.location.href = "https://www.google.com";
  // };

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
              </div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <div className="project-image">
                <img src={Project_img1} alt="" />
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
              </div>
            </div>
          </Card>
          <Card reverse={true}>
            <div className="left">
              <div className="project-image">
                <img src={Project_img1} alt="" />
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
              </div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <div className="project-image">
                <img src={Project_img1} alt="" />
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
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Projects;
