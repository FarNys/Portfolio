import React from "react";
import Title from "./Title";
import "../Styles/About.scss";
const About = () => {
  return (
    <div className="about_container" id="about">
      <Title text="about" />
      <div className="about_box">
        <p>
          For me, Coding started with some simple python projects that i did in
          university. as I move forward to learn more about coding, I find
          HTML/CSS and immediately find my path to become a programmer.
          simplicity capability of styling everything was the main reason. Next
          step for sure was JavaScript as the one and only frontend web language
          and then the most famous framework React.
          <br />
          I started to make tons of projects that you can find some projects in
          top part.
          <br />
          Now I'am frontend web developer who can make nice website and webapp
          with latest technology in world of web like <span>React</span>,{" "}
          <span>Redux</span>, <span>Sass</span>, <span>Material UI</span> and
          ... , Also have some experiences to work with <span>Github</span>,{" "}
          <span>NodeJs</span>, <span>Express</span> and <span>MongoDB</span>.{" "}
        </p>
        <div className="shape_one"></div>
        <div className="shape_two"></div>
      </div>
      <div className="shape_three"></div>
    </div>
  );
};

export default About;
