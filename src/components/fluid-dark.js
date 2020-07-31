import React from "react";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const fluidDark = () => {
  return (
    <div className="fluid-dark-technology">
      <h3>TECHNOLOGY</h3>
      <h5>MY WEBSITE ARCHITECTURE</h5>
      <Row className="fluid-dark-technology-websiteArch">
        <div className="col-lg-2 mb-5">
          <h4>Front End</h4>
          <p>REACT JS</p>
          <li>Single page web app built using create-react-app</li>
          <li>Reusable Component based development</li>
        </div>
        <div className="col-lg-2 mb-5">
          <h4>Back End</h4>
          <p>NODE JS + Firebase</p>
          <li>Single-threaded development using NODE JS</li>
          <li>
            Firebase Cloud Functions running backend code from Google Servers
          </li>
        </div>
        <div className="col-lg-2 mb-5">
          <h4>Routing</h4>
          <p>Express JS + React-Router</p>
          <li>Server side routing using Express JS</li>
          <li>Client side routing using React-Router</li>
        </div>
        <div className="col-lg-2 mb-5">
          <h4>Security</h4>
          <p>Firebase Auth + JWT</p>
          <li>JSON Web Tokens transmitted through Firebase backend servers</li>
        </div>
        <div className="col-lg-2 mb-5">
          <h4>Database</h4>
          <p>NO SQL</p>
          <li>Firebase Realtime Database with data stored as JSON objects</li>
        </div>
        <div className="col-lg-2 mb-5">
          <h4>Future Additions</h4>
          <p>Web Apps</p>
          <li>
            I would like to add a variety of Web Apps to my site in the future!
          </li>
        </div>
      </Row>
      <div>
        <h2>Services</h2>
        <p className="scroll-text">Scroll right to view more info</p>

        <Table responsive className="services-table">
          <thead>
            <tr>
              <th>URL Extension</th>
              <th>End Point</th>
              <th>Type of Service</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/software</td>
              <td>squreshi.net/software</td>
              <td>Firebase Realtime Database</td>
              <td>
                Retrieves Data and parses through a nested JSON Object to
                display the data in the table seen above
              </td>
            </tr>
            <tr>
              <td>/login</td>
              <td>squreshi.net/login</td>
              <td>Firebase Authentication + JWT</td>
              <td>
                Makes request to the server and retrieves a JWT and allows
                access depending on the data on the token
              </td>
            </tr>
            <tr>
              <td>/portal</td>
              <td>squreshi.net/portal</td>
              <td>Firebase Authentication + JWT</td>
              <td>
                Scans user's browser for JWT and allows access to the page if
                the token is present
              </td>
            </tr>
            <tr>
              <td>/portal</td>
              <td>squreshi.net/portal</td>
              <td>Firebase NOSQL Database</td>
              <td>
                Allows data to be added to the Database and updates it in
                realtime
              </td>
            </tr>
            <tr>
              <td>/portal</td>
              <td>squreshi.net/portal</td>
              <td>Cloud Functions</td>
              <td>
                Stores sensitive Authentication data on a secure backend server
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default fluidDark;
