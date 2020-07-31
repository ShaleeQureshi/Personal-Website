import React from "react";

// Importing React Bootstrap Components
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Importing my components
import Header from "../components/header";

// Importing firebase functions
import validation from "../scripts/firebase/firebase";

function LoginApp() {
  return (
    <div>
      <Container>
        <div className="mt-5">
          <Header
            title="Login Portal"
            text="Powered by Google Authentication"
          />
        </div>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              validation(
                document.getElementById("email").value,
                document.getElementById("password").value
              );
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default LoginApp;
