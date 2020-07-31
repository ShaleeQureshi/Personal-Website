import React from "react"; // Importing React
import "react-table/react-table.css";

// Importing React Bootstrap Components
import Container from "react-bootstrap/Container";

// Importing my components
import Navigation from "../components/navbar";
import Header from "../components/header";
import DataTable from "../components/react-table";
import FluidDark from "../components/fluid-dark";
import Footer from "../components/footer";

function SoftwareApp() {
  return (
    <div>
      <div className="Software">
        <Navigation className="software-nav" />
        <Container className="container-repo">
          <Header
            title="Software Repository"
            text={
              <span>
                All of my Software can be found on my{" "}
                <a
                  href="https://github.com/ShaleeQureshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>{" "}
                page
              </span>
            }
          />
          <p className="scroll-text">Scroll right to view more info</p>
          <DataTable node="softwareRepo" pageSize={10} />
        </Container>
        <Container fluid={true} className="fluid-dark">
          <Container>
            <FluidDark />
          </Container>
        </Container>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}
export default SoftwareApp;
