import { useEffect } from "react";
import {
  SiNodedotjs,
  SiJavascript,
  SiGithub,
  SiHtml5,
  SiMongodb,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaGitAlt, FaNpm, FaReact, FaSass } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import me_img from "../assets/jpg/me3.jpg";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="about-container">
      <div className="sub-header" style={{ marginTop: "1rem" }}>
        <h1>About Me</h1>
        <div className="sub-header_underline"></div>
      </div>
      <div className="sub-container-about">
        <div className="img-me">
          <img src={me_img} alt="" id="img" />
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="about-description"
        >
          <p style={{ letterSpacing: "2px", fontWeight: "600" }}>
            Im a front end developer who is passionate about creating responsive
            applications and experiences. <br />I completed a diploma in
            computing when i was younger, fast forward and i have now reignited
            my coding journey, learning new languages and freelancing on the
            side.
            <p>
              If im not coding you will find me out on hiking trails with my
              family or on the water wing surfing.
            </p>
          </p>
        </div>
      </div>
      <div className="sub-header" style={{ marginTop: "3rem" }}>
        <h1>Skills</h1>
        <div className="sub-header_underline"></div>
      </div>
      <div className="sub-container">
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
            CSS3
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
            HTML5
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
            ReactJS
          </div>
          <div className="skills-item">
            <FaSass
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            Sass
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
