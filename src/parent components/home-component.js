import React from "react"; // Importing React

// Importing React Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Importing my components
import Navigation from "../components/navbar";
import MainCard from "../components/main-card";
import ButtonGroup from "../components/btn-group";
import Footer from "../components/footer";

function MainApp() {
  return (
    <div>
      <div className="App">
        <Navigation />
        <Container>
          <Row className="mt-5">
            <Col md={4}>
              <MainCard />
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <ButtonGroup
                btn1="Software"
                btn1push="software"
                btn2="About"
                btn2push="about"
                btn3="Contact"
                btn3push="contact"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default MainApp;
