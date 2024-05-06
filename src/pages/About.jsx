import { useEffect, useContext } from "react";
import {
  SiNodedotjs,
  SiJavascript,
  SiGithub,
  SiHtml5,
  SiMongodb,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import {
  FaGitAlt,
  FaNpm,
  FaReact,
  FaSass,
  FaPaintBrush,
  FaCode,
} from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import me_img from "../assets/jpg/me3.jpg";
import { HashLink } from "react-router-hash-link";
import { ThemeContext } from "../context/DarkModeContext";

function About() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className={darkMode ? "about-container-dark" : "about-container-light"}
    >
      {/* <div className="sub-header" style={{ marginTop: "1rem" }}>
        <h1 className="about-h1">About Me</h1>
        <div className="sub-header_underline"></div>
      </div> */}
      <div className="sub-container-about">
        <div className="img-me">
          <img
            data-aos="slide-right"
            data-aos-duration="1500"
            src={me_img}
            alt=""
            id="img"
          />
        </div>
        <div
          className={
            darkMode ? "about-description-dark" : "about-description-light"
          }
        >
          <div>
            <h3>HI, I'M LUKE</h3>
            <p data-aos="slide-left" data-aos-duration="1500">
              As a freelance web developer, I have a passion for crafting
              bespoke applications tailored to your unique needs. My expertise
              lies in developing responsive, accessible, and SEO-friendly
              websites that elevate your online presence.
            </p>
            <p data-aos="slide-left" data-aos-duration="1500">
              Every project I take on involves custom design and is hand-coded
              to ensure optimal performance. Prioritizing performance not only
              attracts more traffic to your website but also leads to increased
              revenue for your business.
            </p>
            <p data-aos="slide-left" data-aos-duration="1500">
              Whether you're launching a new website or revamping an existing
              one, here at Lumi, I can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="services-container">
        <div className="services-row">
          <div>
            <div
              className={
                darkMode ? "services-item-dark" : "services-item-light"
              }
            >
              <h3>
                {" "}
                <FaPaintBrush
                  style={{
                    marginRight: "5px",
                    color: "#f8c82b",
                    height: "15px",
                  }}
                />
                Web Design
              </h3>
              <p>
                My approach involves getting to know you and understand your
                brand and what you want to achieve from your website. Designing
                in mobile-first and building up.
              </p>
            </div>
          </div>
          <div>
            <div
              className={
                darkMode ? "services-item-dark" : "services-item-light"
              }
            >
              <h3>
                <FaCode
                  style={{
                    marginRight: "5px",
                    color: "#f8c82b",
                    height: "15px",
                  }}
                />
                Web Development
              </h3>
              <p>
                Choosing the right tools for your site to deliver the best user
                experience, whilst being fully responsive and working across all
                devices.
              </p>
            </div>
          </div>
          <div>
            <div
              className={
                darkMode ? "services-item-dark" : "services-item-light"
              }
            >
              <h3>
                {" "}
                <GrOptimize
                  style={{
                    marginRight: "5px",
                    color: "#f8c82b",
                    height: "15px",
                  }}
                />{" "}
                Optimisation
              </h3>
              <p>
                Optimising your website to perform at its best for page load
                speed and search engine optimisation. Ensuring accessibility and
                best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-header" style={{ marginTop: "3rem" }}>
        <h1>Tools I use... </h1>
        <div className="sub-header_underline"></div>
      </div>
      <div className={darkMode ? "sub-container-dark" : "sub-container-light"}>
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
            <p style={{ color: darkMode ? "white" : "black" }}>Javascript</p>
          </div>
          <div className="skills-item">
            <DiCss3
              style={{
                fontSize: "50px",
                marginBottom: "3px",
                color: darkMode ? "white" : "black",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>CSS</p>
          </div>

          <div className="skills-item">
            <SiHtml5
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>HTML</p>
          </div>
          <div className="skills-item">
            <SiMongodb
              style={{
                fontSize: "50px",
                marginBottom: "3px",
                color: darkMode ? "white" : "black",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>MongoDB</p>
          </div>
          <div className="skills-item">
            <SiNodedotjs
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>NodeJS</p>
          </div>
          <div className="skills-item">
            <FaNpm
              style={{
                fontSize: "50px",
                marginBottom: "3px",
                color: darkMode ? "white" : "black",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>NPM</p>
          </div>
          <div className="skills-item">
            <FaReact
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>ReactJS</p>
          </div>
          <div className="skills-item">
            <FaSass
              style={{
                color: darkMode ? "white" : "black",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>Sass</p>
          </div>
          <div className="skills-item">
            <TbBrandNextjs
              style={{
                color: "#78a1bb",
                fontSize: "50px",
                marginBottom: "3px",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>NextJS</p>
          </div>
          <div className="skills-item">
            <SiGithub
              style={{
                fontSize: "50px",
                marginBottom: "3px",
                color: darkMode ? "white" : "black",
              }}
            />
            <p style={{ color: darkMode ? "white" : "black" }}>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
