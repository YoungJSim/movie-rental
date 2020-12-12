import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Navi from "./components/Navi";
import Jumbo from "./components/Jumbo";
import MovieList from "./components/MovieList";
import Store from "./components/Store";
import SignUp from "./components/SignUp";
import { Login } from "./components/RouteIndex";
import Setting from "./components/Setting";
import Search from "./components/Search";
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
    const Email = window.localStorage.getItem("Email");
    if (Email) {
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
              <Route path="/setting" component={Setting} />
              <Route path="/search" component={Search} />
            </Switch>
          </Router>
        </Store.Provider>
      </div>
    );
  }
}

export default App;
