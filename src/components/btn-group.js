import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import history from "../scripts/history";

class BtnGroup extends React.Component {
  render() {
    return (
      <div className="group-buttons">
        <ButtonGroup vertical className="w-100 mt-5">
          <Button
            className="mt-5"
            onClick={() => history.push(`/${this.props.btn1push}`)}
          >
            {this.props.btn1}
          </Button>
          <Button
            className="mt-5"
            onClick={() => history.push(`/${this.props.btn2push}`)}
          >
            {this.props.btn2}
          </Button>
          <Button
            className="mt-5"
            onClick={() => history.push(`/${this.props.btn3push}`)}
          >
            {this.props.btn3}
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default BtnGroup;
