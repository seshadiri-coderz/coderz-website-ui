/* eslint-disable react/prop-types */
import React from "react";
import "./AboutCoderzimg.css";

const AboutCoderzimg = ({ variant = 1, image, logo }) => {
  return (
    <div className={`team-card variant-${variant}`}>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="image-container">
        <img src={image} alt="team" className="team-img" />
      </div>
    </div>
  );
};


export default AboutCoderzimg;
