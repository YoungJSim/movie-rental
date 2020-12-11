import React, { Component } from "react";
import Store from "./Store";
import Login from "./Login";

class LoginContainer extends Component {
  render() {
    return (
      <Store.Consumer>
        {(store) => <Login onLogin={store.onLogin} />}
      </Store.Consumer>
    );
  }
}

export default LoginContainer;
