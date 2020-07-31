import React from "react"; // Importing React

// Importing React Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Importing my components
import Header from "../components/header";

function Four0FourApp() {
  return (
    <div className="FourZeroFour">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Header title="404" text="Not Found" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Four0FourApp;
