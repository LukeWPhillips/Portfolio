import { IoIosArrowDown } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <div className="home">
      <header>
        <p className="header">
          Luke Phillips <span className="underline1"></span>
        </p>
        <p className="header" style={{ fontSize: "4rem" }}>
          Web developer
          <span className="underline2"></span>
        </p>
      </header>
      <HashLink smooth to="/page#about">
        <div className="arrow">
          <IoIosArrowDown />
        </div>
      </HashLink>
    </div>
  );
}

export default Home;
