import React from "react";
import "../Styles/Projects.scss";
const Title = ({ text }) => {
  return (
    <div className="project_title">
      <a href={`#${text}`}>
        # {text.split("")[0].toUpperCase() + text.slice(1, text.length)}
      </a>
      <div className="square_color"></div>
    </div>
  );
};

export default Title;
