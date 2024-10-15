import { IoIosArrowDown } from "react-icons/io";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/DarkModeContext";
import { useContext } from "react";
import nebula from "../assets/jpg/nebula-3.jpg";
import laptop from "../assets/jpg/bg-4.png";
import curve from "../assets/png/rectangle.png";
import curve_two from "../assets/png/Rectangle-4.png";

function Home() {
  const { darkMode } = useContext(ThemeContext);

  const btnStyle = {
    color: darkMode ? "white" : "black",
  };

  return (
    <>
      <div className={darkMode ? "bg-wrap-dark" : "bg-wrap-light"}>
        <div aria-hidden="true" className="universe">
          <div
            className={darkMode ? "shooting_star-dark" : "shooting_star-light"}
          ></div>
          <div className={darkMode ? "laptop-dark" : "laptop-light"}>
            <img
              className={darkMode ? "laptop-dark" : "laptop-light"}
              src={laptop}
              alt="laptop"
            />
          </div>
          <div className={darkMode ? "nebula-dark" : "nebula-light"}>
            <img
              className={darkMode ? "nebula-dark" : "nebula-light"}
              src={nebula}
              alt="nebula"
            />
          </div>
          <svg
            className={darkMode ? "satellite-dark" : "satellite-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>

          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="1px"
            height="1px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="3px"
            height="3px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="1px"
            height="1px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="3px"
            height="3px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="3px"
            height="3px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="3px"
            height="3px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="3px"
            height="3px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="3px"
            height="3px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="3px"
            height="3px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <svg
            className={darkMode ? "star-dark" : "star-light"}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="2px"
            height="2px"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
        </div>
        <div className={darkMode ? "home-dark" : "home-light"}>
          <div className="titel-1">
            <h1 className={darkMode ? "header-dark" : "header-light"}>
              <span className={darkMode ? "lumi-dark" : "lumi-light"}>
                Lumi
                <div className={darkMode ? "dot-dark" : "dot-light"}></div>
              </span>
              <span
                className={darkMode ? "underline1-dark" : "underline1-light"}
              ></span>
            </h1>
          </div>
          <div className="title-2">
            <h2
              className={darkMode ? "wordchange-dark" : "wordchange-light"}
            ></h2>
          </div>
          <div className="title-3">
            <p className={darkMode ? "home_p-dark" : "home_p-light"}>
              100% hand-coded websites with superior results.
            </p>
          </div>

          <NavHashLink
            style={btnStyle}
            className="btn-home"
            smooth
            to="/page#contact"
            activeClassname="active"
          >
            Get in touch
          </NavHashLink>
        </div>
      </div>
      <div
        className={
          darkMode ? "rectangle-container-dark" : "rectangle-container-light"
        }
      >
        <img
          src={darkMode ? curve : curve_two}
          alt="curve"
          className={darkMode ? "rectangle-dark" : "rectangle-light"}
        />
      </div>
    </>
  );
}

export default Home;
