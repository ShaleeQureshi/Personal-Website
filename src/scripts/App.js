import React from "react"; // Importing React
import "bootstrap/dist/css/bootstrap.min.css"; // Importing bootstrap css
import { Router, Route, Switch } from "react-router-dom"; // Importing React Router
import history from "./history"; // Importing history to work with broswer history

// Importing parent components
import MainApp from "../parent components/home-component";
import SoftwareApp from "../parent components/software-component";
import ContactApp from "../parent components/contact-component";
import AboutApp from "../parent components/about-component";
import LoginApp from "../parent components/login-component";
import Four0FourApp from "../parent components/404-component";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainApp} />
        <Route path="/home" exact component={MainApp} />
        <Route path="/software" exact component={SoftwareApp} />
        <Route path="/about" exact component={AboutApp} />
        <Route path="/contact" exact component={ContactApp} />
        <Route path="/login" exact component={LoginApp} />
        <Route component={Four0FourApp} />
      </Switch>
    </Router>
  );
}

export default App;
