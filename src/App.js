import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./Styles/App.scss";
const App = () => {
  //SCROLL TO CONTROL NAVBAR STYLE
  const scrollHandler = (e) => {
    const navbarQuery = document.querySelector(".navbar_box");
    const appQuery = document.querySelector(".app_container");
    const dimension = -appQuery.getBoundingClientRect().top;
    const navbarHeight = navbarQuery.offsetTop;
    navbarQuery.addEventListener("mouseover", () => {
      navbarQuery.classList.remove("fade");
    });
    navbarQuery.addEventListener("mouseleave", () => {
      console.log(dimension, defHeight, navbarHeight);
      if (dimension > defHeight) {
        console.log(dimension, defHeight);
        navbarQuery.classList.add("fade");
      }
    });
  };
  const defHeight = 600;
  useEffect(() => {
    const navbarQuery = document.querySelector(".navbar_box");
    const appQuery = document.querySelector(".app_container");
    let dimension = -appQuery.getBoundingClientRect().top;
    const navbarHeight = navbarQuery.offsetTop;
    if (dimension < defHeight) {
      navbarQuery.classList.remove("fade");
    } else {
      navbarQuery.classList.add("fade");
    }
  }, []);

  //SCROLL TO CONTROL NAVBAR STYLE END!
  return (
    <div className="app_container" onWheelCapture={scrollHandler}>
      <Navbar />
      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
