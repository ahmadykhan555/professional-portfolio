import React from "react";
import "./Navbar.scss";

const Navbar: React.FC<any> = () => {
  return (
    <div className="navbar ''" style={{ background: "black" }}>
      <div className="intro">
        <h3 className="dev-name">Ahmad Yar Khan</h3>
        <h5 className="dev-expertise">Full stack developer</h5>
      </div>
      <div className="links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
