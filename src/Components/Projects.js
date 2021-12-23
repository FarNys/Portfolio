import React, { useState, useRef } from "react";
import "../Styles/Projects.scss";
import { projectsData } from "../Data";
import {
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaAngleRight,
  FaGithub,
  FaCircle,
  FaLink,
} from "react-icons/fa";
import Title from "./Title";

const Projects = () => {
  const [index, setindex] = useState(0);
  const [imageStyle, setimageStyle] = useState(true);
  const {
    id,
    name,
    tools,
    apiLink,
    host,
    auth,
    colors,
    description,
    githubLink,
    inspiredBy,
    inspiredByLink,
    image,
    link,
  } = projectsData[index];
  const nextHandler = () => {
    setimageStyle(false);
    setTimeout(() => {
      if (index < projectsData.length - 1) {
        setindex(index + 1);
      } else {
        setindex(0);
      }
      setimageStyle(true);
    }, 600);
  };
  const prevHandler = () => {
    setimageStyle(false);
    setTimeout(() => {
      if (index < 1) {
        setindex(projectsData.length - 1);
        console.log(index);
      } else {
        setindex(index - 1);
      }
      setimageStyle(true);
    }, 600);
  };
  return (
    <div className="projects_container" id="projects">
      <Title text="projects" />
      <div className="project_top_part">
        <a className="project_left" href={link}>
          <img
            src={image}
            alt="projectImage"
            className={imageStyle ? "project_image" : "project_active"}
          />
          <div className="project_bot_part">
            <h6>Description</h6>
            <p>{description}</p>
          </div>
        </a>
        <div className="project_right">
          <div className="project_right_name">
            <FaChevronCircleLeft
              className="arrow_icon arrow_icon_left"
              onClick={prevHandler}
            />
            <h2>{name}</h2>
            <FaChevronCircleRight
              className="arrow_icon arrow_icon_right"
              onClick={nextHandler}
            />
          </div>
          <div className="project_right_stack">
            <h2>
              <FaCircle className="cirlce_icon" />
              Tech Stack
            </h2>
            {tools.map((el, id) => (
              <li key={id}>
                <FaAngleRight className="icon_icon" />
                {el}
              </li>
            ))}
          </div>
          <div className="project_right_stack">
            <h2>
              <FaCircle className="cirlce_icon" />
              Tools
            </h2>
            <li>
              <FaAngleRight className="icon_icon" />
              Authentication: {auth}
            </li>
            {apiLink !== "" && (
              <li>
                <FaAngleRight className="icon_icon" />
                ApiLink:
                <a href={apiLink}>
                  <FaLink />
                </a>
              </li>
            )}

            {inspiredBy !== "" && (
              <li>
                <FaAngleRight className="icon_icon" />
                InspiredBy:{" "}
                <a href={inspiredByLink}>
                  <FaLink />
                  {inspiredBy}
                </a>
              </li>
            )}

            <li>
              <FaAngleRight className="icon_icon" />
              Host:{" "}
              <a href={link}>
                <FaLink />
                {host}
              </a>
            </li>

            <li>
              <FaAngleRight className="icon_icon" />
              GithubRepo:
              <a href={githubLink}>
                <FaGithub className="github_icon" />
              </a>
            </li>
            <div className="colors_container">
              <li className="colors_list">
                <FaAngleRight className="icon_icon" />
                Colors:
              </li>
              {colors.map((color, id) => (
                <div className="color_box">
                  <span key={id + 10} style={{ backgroundColor: color }}></span>
                  <div
                    className="hover_color"
                    style={{ border: `1px solid ${color}` }}
                  >
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
