import React from "react";
import Card from "react-bootstrap/Card";
import picture from "../assets/images/icon.png";

import SocialLinks from "./social-links";

const MainCard = () => {
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }} className="w-100">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>Shahrukh Qureshi</Card.Title>
          <Card.Text>
            Self-Learning Software Engineer through Research and Development
          </Card.Text>
          <SocialLinks />
        </Card.Body>
      </Card>
    </div>
  );
};
export default MainCard;
