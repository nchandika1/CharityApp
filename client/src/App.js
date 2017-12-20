import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Donations from "./pages/Donations";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/donations" component={Donations} />
      </Switch>

    </div>
  </Router>;

export default App;
