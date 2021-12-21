import React, { useEffect, useState } from "react";
import "../Styles/Navbar.scss";
const Navbar = () => {
  //CONTROLL NAVBAR STYLE ON SCROLL
  const [fadeClass, setfadeClass] = useState(true);
  const navbarScroll = () => {
    if (window.scrollY > 100) {
      setfadeClass(false);
    } else {
      setfadeClass(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarScroll);
    return () => {
      window.removeEventListener("scroll", navbarScroll);
    };
    // };
  }, []);
  //UNDERLINE MOVEMENT FOR HOVER EFFECT
  useEffect(() => {
    const getLinks = document.querySelectorAll(".navbar_container li a");
    const underline = document.querySelector(".underline");

    getLinks.forEach((el) => {
      el.addEventListener("mouseover", () => {
        const targetLeft = el.offsetLeft;
        const targetWidth = el.getBoundingClientRect().width;
        underline.style.left = `${targetLeft + "px"}`;
        underline.style.width = `${targetWidth + "px"}`;
      });
    });
  }, []);
  //

  return (
    <div className={fadeClass ? "navbar_box" : "navbar_box fade"}>
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
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default Navbar;
