import { useEffect } from "react";
import {
  SiNodedotjs,
  SiJavascript,
  SiGithub,
  SiHtml5,
  SiMongodb,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaGitAlt, FaNpm, FaReact } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="about-container">
      <div className="sub-container">
        <div className="sub-header">About Me</div>
        <div className="img-me"></div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="about-description"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa
          architecto numquam blanditiis fugiat, eveniet animi nostrum voluptas
          fuga quis ex quod molestias reiciendis non ipsam officia maxime est
          facere.
        </div>
      </div>
      <div className="sub-container">
        <div className="sub-header">Skills</div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="skills-row"
        >
          <div className="skills-item">
            <SiJavascript
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            Javascript
          </div>
          <div className="skills-item">
            <DiCss3 style={{ fontSize: "50px", marginBottom: "3px" }} />
            CSS
          </div>
          <div className="skills-item">
            <FaGitAlt
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            Git
          </div>
          <div className="skills-item">
            <SiGithub style={{ fontSize: "50px", marginBottom: "3px" }} />
            Github
          </div>
          <div className="skills-item">
            <SiHtml5
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            HTML
          </div>
          <div className="skills-item">
            <SiMongodb style={{ fontSize: "50px", marginBottom: "3px" }} />
            MongoDB
          </div>
          <div className="skills-item">
            <SiNodedotjs
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            NodeJS
          </div>
          <div className="skills-item">
            <FaNpm style={{ fontSize: "50px", marginBottom: "3px" }} />
            NPM
          </div>
          <div className="skills-item">
            <FaReact
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            React
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
