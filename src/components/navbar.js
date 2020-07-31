import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <div className="navbar-global">
      <Navbar collapseOnSelect expand="lg" bg="#191919;" variant="light">
        <Container fluid={true} id="container-fluid-nav">
          <Container>
            <Navbar.Brand href="/" id="brand">
              Shahrukh Qureshi
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="software">Software</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
