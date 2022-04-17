import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Instructor = ({ instructor }) => {
  const { id, name, img } = instructor;
  const navigate = useNavigate();
  const handleHire = (id) => {
    navigate(`/instructor/${id}`);
  };

  return (
    <div>
      <div className="g-5 col-sm-12 col-md-6 col-lg-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button
              onClick={() => handleHire(id)}
              className="btn btn-dark text-white"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
