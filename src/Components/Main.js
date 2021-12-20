import React from "react";
import "../Styles/Main.scss";
const Main = () => {
  const text = "Frontend";
  console.log(text.split(""));
  return (
    <div className="main_container" id="main">
      <div className="main_box">
        <div className="main_left">
          <img src="images/person.png" alt="portfolio_image" />
        </div>
        <div className="main_right">
          <div className="ball_top_container">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
          <h1>
            Hi, I'm{" "}
            <div className="frontend_container">
              {text.split("").map((el, id) => (
                <span key={id}>{el}</span>
              ))}
            </div>
          </h1>
          <h1>Web Developer.</h1>
          <div className="ball_bot_container">
            <div className="ball ball_four ballBot"></div>
            <div className="ball ball_five ballBot"></div>
            <div className="ball ball_six ballBot"></div>
          </div>
          <p>I will bring value to your business.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
