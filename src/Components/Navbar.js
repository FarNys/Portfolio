import React from "react";
import "../Styles/Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <li>
        <a href="#main">Main</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </div>
  );
};

export default Navbar;
