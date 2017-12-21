import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from './components/Nav';
import Users from "./pages/Users";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/Donations" component={Users} />
      </Switch>

    </div>
  </Router>;

export default App;
