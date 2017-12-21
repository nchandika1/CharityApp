import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from './components/Nav';
import Donations from "./pages/Donations";

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/donations" component={Donations} />
      </Switch>

    </div>
  </Router>;

export default App;
