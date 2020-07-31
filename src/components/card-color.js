import React from "react";
import Card from "react-bootstrap/Card";

class CardColor extends React.Component {
  render() {
    return (
      <div>
        <Card
          bg={this.props.bg}
          text="light"
          style={{ width: "18rem" }}
          className={this.props.classN}
        >
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Body>
            <Card.Title> {this.props.title} </Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
            {this.props.bar}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default CardColor;
