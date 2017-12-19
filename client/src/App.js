import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Users} />
      </Switch>

    </div>
  </Router>;

export default App;
