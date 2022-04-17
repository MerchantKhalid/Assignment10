import React from "react";
import { Button, Form } from "react-bootstrap";

const Checkout = () => {
  return (
    <div>
      <div className="container mx-auto w-50 mt-5 text-left">
        <h2 className="fw-bold text-dark">Cart</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group readonly className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group readonly className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Address" required />
          </Form.Group>
          <Form.Group readonly className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Phone" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Order
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
