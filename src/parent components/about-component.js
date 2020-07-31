import React from "react"; // Importing React

// Importing React Bootstrap Components
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import ProgressBar from "react-bootstrap/ProgressBar";
// Importing my components
import Navigation from "../components/navbar";
import Header from "../components/header";
import DataTable from "../components/react-table";
import CardColor from "../components/card-color";
import Footer from "../components/footer";

function AboutApp() {
  return (
    <div>
      <Navigation />
      <Container>
        <div className="mt-5">
          <Header
            title="MY WORK"
            text="I've always had a keen interest in computers, software specifically,
          ever since I built a computer with components from old devices and
          install Windows XP to replace the previous Operating System. I
          develop mostly for fun but also to try and help others learn
          programming by making my work open-source and well documented. I am
          currently exploring opportunities as a Freelance Developer."
          />
        </div>
        <h3 className="mt-5">Freelance Work</h3>
        <p className="scroll-text">Scroll right to view more info</p>
        <DataTable node="freelance" pageSize={5} />
        <h3 className="mt-5">Programming Languages</h3>
        <p style={{ fontFamily: "Gravity-Italic" }}>
          Progress Bar indicates my proficiency with the specified language
        </p>
        <CardDeck className="justify-content-md-center">
          <CardColor
            bg="danger"
            classN="mb-3"
            header="Programming Languages"
            title="Java"
            text="Java is the first language I learned so naturally it is the
            one I am most fluent in and is my preferred language to use in
            App or Back End development."
            bar={<ProgressBar animated now={85}></ProgressBar>}
          />
          <CardColor
            bg="info"
            classN="mb-3"
            header="Programming Languages"
            title="JavaScript"
            text="JavaScript is a language I picked up quiet quickly, along with
            its various frameworks, and I use it to complete projects
            ranging from Front to Back End development."
            bar={<ProgressBar animated now={70}></ProgressBar>}
          />
          <CardColor
            bg="dark"
            classN="mb-3"
            header="Programming Languages"
            title="Python"
            text="I mainly use Python to create projects related to algorithms
            such as my A* Pathfinding Algorithm Visualizer, but I am able
            to create Web Apps using Django."
            bar={<ProgressBar animated now={65}></ProgressBar>}
          />
          <CardColor
            bg="primary"
            classN="mb-3"
            header="Programming Languages"
            title="Dart"
            text="I have used Dart with the Flutter UI Framework to create Cross Platform Mobile Apps. 
            It was pretty easy to pick up for me due to its similarities with Java and C."
            bar={<ProgressBar animated now={55}></ProgressBar>}
          />
          <CardColor
            bg="secondary "
            classN="mb-3"
            header="Programming Languages"
            title="C / C++"
            text="I learned C/C++ to understand the processes that occur under the hood when using higher level languages such as Java and Python."
            bar={<ProgressBar animated now={40}></ProgressBar>}
          />
          <CardColor
            bg="success"
            classN="mb-3"
            header="Programming Languages"
            title="ARM (Big Endian)"
            text="I wanted to understand how microprocessor interpret data so I decided to teach myself some Assembly. I used it very briefly and learned up to block move."
            bar={<ProgressBar animated now={30}></ProgressBar>}
          />
        </CardDeck>
      </Container>
      <Footer />
    </div>
  );
}
export default AboutApp;
