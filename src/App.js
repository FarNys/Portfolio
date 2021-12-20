import React from "react";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./Styles/App.scss";
const App = () => {
  //SCROLL TO CONTROL NAVBAR STYLE
  const scrollHandler = (e) => {
    const navbarQuery = document.querySelector(".navbar_container");
    const appQuery = document.querySelector(".app_container");
    const dimension = -appQuery.getBoundingClientRect().top;
    console.log(dimension);
    if (dimension > 600) {
      navbarQuery.classList.add("fade");
    } else {
      navbarQuery.classList.remove("fade");
    }
    navbarQuery.addEventListener("mouseover", () => {
      navbarQuery.classList.remove("fade");
    });
    navbarQuery.addEventListener("mouseleave", () => {
      navbarQuery.classList.add("fade");
    });
  };
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
