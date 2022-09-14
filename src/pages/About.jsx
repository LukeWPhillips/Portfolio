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
import me_img from "../assets/jpg/me.jpg";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="about-container">
      <div className="sub-container">
        <div className="sub-header">About Me</div>
        <div className="img-me">
          <img src={me_img} alt="" id="img" />
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="about-description"
        >
          <p style={{ letterSpacing: "2px", fontWeight: "600" }}>
            Hi i'm Luke an aspiring junior looking to kickstart a career in web
            development, i love building responsive well designed websites and
            bringing code to life. I have long been interested in technology and
            completed a diploma in computing at a younger age, and only now am
            realising its where i want to be.
            <br />
            In my free time i will be outdoors exploring new hiking trails and
            camping spots with family and friends. I also enjoy woodworking and
            playing the ukulele.
          </p>
        </div>
      </div>
      <div className="sub-container">
        <div className="sub-header" style={{ marginBottom: "0.5rem" }}>
          Skills
        </div>
        <h2 style={{ color: "#72addd", marginBottom: "50px" }}>
          A selection of stuff i can do...
        </h2>
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
