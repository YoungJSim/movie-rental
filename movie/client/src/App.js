import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navi from "./components/Navi";
import Jumbo from "./components/Jumbo";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navi></Navi>
        <Switch>
          <Route exact path="/" component={Jumbo} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
