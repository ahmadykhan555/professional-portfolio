import React, { useState } from "react";
import "./Navbar.scss";
import { UserInfo } from "../../meta/meta";

interface NavBarProps {
  info: UserInfo;
}

const Navbar: React.FC<NavBarProps> = ({ info }) => {
  return (
    <div className="navbar ''" style={{ background: "black" }}>
      <div className="intro">
        <h3 className="dev-name">{info.name}</h3>
        <h5 className="dev-expertise">{info.expertise}</h5>
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
