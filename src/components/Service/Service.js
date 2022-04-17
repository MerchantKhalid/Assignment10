import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, fee, img, desc } = service;
  return (
    <div className="service">
      <img className="image-size" src={img} alt="" />

      <h2>{name}</h2>
      <h3>Fee:{fee}</h3>
      <h3>Desc:{desc}</h3>
      <br></br>
    </div>
  );
};

export default Service;
