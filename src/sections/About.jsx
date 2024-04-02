import React from "react";
import "../styles/About.css";
import linked from "../Images/linked.svg";
import github from "../Images/github.svg";
import gmail from "../Images/gmail.svg";

const About = () => {
  return (
    <>
      <div className="about-section" id="about">
        <span>"</span> VoteSphere is a versatile platform dedicated to
        amplifying individual voices and empowering users to shape cultural
        trends.
        <br /> With a wide array of categories ranging from music to literature,
        VoteSphere offers a space for passionate opinions to thrive. <br />
        Its intuitive interface enables seamless exploration, allowing users to
        cast votes and observe real-time results.
        <br /> Transparency and accuracy are core values, ensuring users have
        access to comprehensive analysis and insights into voting trends.
        <br />
        Upholding the highest standards of integrity, VoteSphere invites users
        to join a vibrant community <br />
        where every voice is heard and valued, contributing to the cultural
        landscape of tomorrow. <span>"</span>
      </div>
      <div id="contact" className="contact">
        <a
          className="item"
          href="https://www.linkedin.com/in/nazarene-wanyaga/"
          target="#"
        >
          <img src={linked} alt="linked" width={40} />
          <p>Nazarene Wanyaga</p>
        </a>
        <a className="item" href="https://github.com/nazarenegena" target="#">
          <img src={github} alt="github" width={40} />
          <p>nazarenegena</p>
        </a>
        <div className="item">
          <img src={gmail} alt="gmail" width={40} />
          <p>nazarenewanyaga24@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default About;
