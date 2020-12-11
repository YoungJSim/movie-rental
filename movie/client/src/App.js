import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Navi from "./components/Navi";
import Jumbo from "./components/Jumbo";
import MovieList from "./components/MovieList";
import Store from "./components/Store";
import SignUp from "./components/SignUp";
import { Login } from "./components/RouteIndex";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }
  onLogin = () => {
    this.setState({ logged: true });
  };

  onLogout = () => {
    this.setState({ logged: false });
    window.localStorage.clear();
  };

  componentWillMount() {
    const id = window.localStorage.getItem("id");
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }
  render() {
    const { logged, onLogout } = this.state;
    return (
      <div className="App">
        <Store.Provider value={this.state}>
          <Router>
            <Navi logged={logged} onLogout={onLogout}></Navi>
            <Switch>
              <Route exact path="/">
                {logged ? <Redirect to="/list" /> : <Jumbo />}
              </Route>
              <Route path="/login" component={Login} />
              <Route path="/list" component={MovieList} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </Store.Provider>
      </div>
    );
  }
}

export default App;
