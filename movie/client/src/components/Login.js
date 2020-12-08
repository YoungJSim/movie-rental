import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
    };
  }
  handleSubmit = () => {};
  render() {
    return (
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>LOGIN</h3>
            </div>
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email-address"
                    name="email"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    class="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                <Link to="/signup"> Sign up</Link>
              </div>
              <div class="d-flex justify-content-center">
                <Link to="/password"> Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
