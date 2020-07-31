import React from "react"; // Importing React

// Importing React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Importing my components
import Navigation from "../components/navbar";
import Header from "../components/header";
import BtnGroup from "../components/btn-group";
import Footer from "../components/footer";

function ContactApp() {
  return (
    <div>
      <Navigation />
      <Container className="Contact">
        <Row>
          <Col md={4}>
            <Header title="Contact" text="" />
            <Form action="https://formspree.io/xjvaojjk" method="POST">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="myemail@email.com"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Reason</Form.Label>
                <Form.Control as="select" name="subject" required>
                  <option>I like your software</option>
                  <option>Question</option>
                  <option>Business</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" name="message" required />
              </Form.Group>
              <Button type="submit" variant="dark">
                Send Email
              </Button>
            </Form>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <BtnGroup
              btn1="Home"
              btn1push="home"
              btn2="Software"
              btn2push="software"
              btn3="About"
              btn3push="about"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default ContactApp;
