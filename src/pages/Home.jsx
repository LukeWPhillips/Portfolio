import { IoIosArrowDown } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: "750",
        behavior: "smooth",
      });
    }, 5000);
  }, []);

  return (
    <div className="bg-wrap">
      <div className="home">
        <header>
          <p className="header">
            Luke Phillips <span className="underline1"></span>
          </p>
          <p className="header" style={{ fontSize: "3rem" }}>
            Front End Developer
            <span className="underline2"></span>
          </p>
        </header>

        <div className="arrow">
          <HashLink smooth to="/page#about">
            <IoIosArrowDown
              className="arrow_style"
              style={{ color: "white" }}
            />
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
