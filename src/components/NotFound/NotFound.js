import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text center mt-5 fw-bold">Nothing Found</h2>
      <Button className="btn btn-primart text-white">
        <Link to={"/home"}>Back to Home </Link>
      </Button>
    </div>
  );
};

export default NotFound;
