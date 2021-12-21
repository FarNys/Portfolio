import React from "react";
import "../Styles/Projects.scss";

import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const Projects = () => {
  const nextHandler = () => {
    console.log(65);
  };
  return (
    <div className="projects_container" id="projects">
      <div className="project_top_part">
        <div className="project_left">
          <img src="images/person.png" alt="projectImage" />
        </div>
        <div className="project_right">
          <div className="project_right_name">
            <FaChevronCircleLeft className="arrow_icon" onClick={nextHandler} />
            <p>MemoryCard</p>
            <FaChevronCircleRight className="arrow_icon" />
          </div>
          <div className="project_right_features">
            <h2>Tech stack</h2>
            <li>HTML</li>
            <li>CSS</li>
          </div>
        </div>
      </div>
      <div className="project_bot_part">Desc</div>
    </div>
  );
};

export default Projects;
