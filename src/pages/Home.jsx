import { IoIosArrowDown } from "react-icons/io";

import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <div className="home">
      <header>
        <p className="header">
          Hi, I'm Luke.
          <span className="underline1"></span>
        </p>
        <p className="header">
          I'm a web developer.
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
