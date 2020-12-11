import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { logged, onLogout } = this.props;

    return (
      <Navbar bg="light" expand="lg">
        <Link to="/" class="navbar-brand">
          Goguma
        </Link>
        <Nav className="ml-auto">
          {logged ? (
            <Link
              to="/"
              onClick={() => {
                onLogout();
              }}
              class="nav-link"
            >
              Logout
            </Link>
          ) : (
            <Link to="/login" class="nav-link">
              Login
            </Link>
          )}
        </Nav>
      </Navbar>
    );
  }
}

export default Navi;
