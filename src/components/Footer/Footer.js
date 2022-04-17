import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center mt-5">
      <small className="fw-bold">copyrights @{year}</small>
      <br></br>
      <small className="fw-bold">all rights reserved by FitnessCo</small>
    </div>
  );
};

export default Footer;
