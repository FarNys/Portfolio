import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./Styles/App.scss";
const App = () => {
  return (
    <div className="app_container">
      <Navbar />
      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
