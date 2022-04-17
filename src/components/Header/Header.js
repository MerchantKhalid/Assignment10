import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="fw-bold" as={Link} to="home">
            FitnessCo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link> */}
              <Nav.Link as={Link} to="/checkout">
                Checkout
              </Nav.Link>
              {user ? (
                <Button onClick={handleSignOut}>SignOut</Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar bg="dark" variant="dark">
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
      </Navbar> */}

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
