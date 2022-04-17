import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const navigate = useNavigate();
  const navigateLogin = (e) => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container mx-auto w-50 mt-5 text-left">
      <h2 className="fw-bold text-dark">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm-Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-5">
        Already Registered?
        <span
          onClick={navigateLogin}
          style={{ cursor: "pointer" }}
          className="text-danger ms-2 "
        >
          Please Login
        </span>
      </p>
    </div>
  );
};

export default Register;
