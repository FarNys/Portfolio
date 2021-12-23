import React from "react";
import Title from "../Components/Title";
import "../Styles/Contact.scss";
import { SiGmail } from "react-icons/si";
import { FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact_container" id="contact">
      <Title text="contact" />
      <p>Feel free to contact me via this apps.</p>
      <div className="contact_box">
        <a className="box" href="">
          <span style={{ backgroundColor: "#128C7E" }}></span>
          <FaWhatsapp
            style={{ color: "#128C7E" }}
            className="icon_for_contact"
          />
        </a>
        <a className="box" href="">
          {" "}
          <span style={{ backgroundColor: "#0088cc" }}></span>
          <FaTelegram
            style={{ color: "#0088cc" }}
            className="icon_for_contact"
          />
        </a>
        <a className="box" href="#gmail">
          {" "}
          <span style={{ backgroundColor: "#BB001B" }}></span>
          <SiGmail style={{ color: "#BB001B" }} className="icon_for_contact" />
        </a>
        <a className="box" href="https://github.com/FarNys">
          {" "}
          <span style={{ backgroundColor: "#304352" }}></span>
          <FaGithub style={{ color: "#304352" }} className="icon_for_contact" />
        </a>
      </div>
      <div className="email_box" id="gmail">
        <li>FaridSalmany@gmail.com</li>
      </div>
    </div>
  );
};

export default Contact;
