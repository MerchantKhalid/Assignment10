import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            FitnessCo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex">
            {" "}
            <Nav.Link className="primary" href="#login">
              Login
            </Nav.Link>
            <Nav.Link href="#login">Register</Nav.Link>
          </div>
        </Container>
      </Navbar>
      {/* <div className="logo">
        <Link className="anchor-logo" to={"/"}>
          <h3>FitnessCo.</h3>
        </Link>
      </div>
      <div className="nav-link">
        <Link className="anchor" to={"/"}>
          Home
        </Link>
        <Link className="anchor" to={"/about"}>
          About
        </Link>
        <Link className="anchor" to={"/services"}>
          Services
        </Link>
        <Link className="anchor" to={"/blog"}>
          Blog
        </Link>
        <Link className="anchor" to={"/login"}>
          Login
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
