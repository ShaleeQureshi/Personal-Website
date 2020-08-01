import React from "react"; // Importing React
import "bootstrap/dist/css/bootstrap.min.css"; // Importing bootstrap css
import { Router, Route, Switch } from "react-router-dom"; // Importing React Router
import history from "./history"; // Importing history to work with broswer history

// Importing pages
import MainApp from "../pages/home";
import SoftwareApp from "../pages/software";
import ContactApp from "../pages/contact";
import AboutApp from "../pages/about";
import LoginApp from "../pages/login";
import Four0FourApp from "../pages/404";

// Main
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
