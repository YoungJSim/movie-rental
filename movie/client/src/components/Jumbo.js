import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Enjoy, Unlimited Movies! </h1>
        <p>
          This is a movie rental system project for 2020 fall Database class.
        </p>

        <p>
          <Button className="JumboButton" variant="primary">
            Learn more
          </Button>
        </p>
        <p> Goguma means, GO and Get Ur Movies, As soon as possible.</p>
      </Jumbotron>
    );
  }
}

export default Jumbo;
