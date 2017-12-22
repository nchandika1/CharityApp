// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Donations from "./pages/Donations";
import Profile from "./pages/Profile";
import Volunteer from "./pages/Volunteer";

// Main component rendered in the index.html
const App = () =>
  <Router>
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:userid" component={Profile} />
          <Route exact path="/donate/:userid" component={Donations} />
          <Route exact path="/volunteer/:userid" component={Volunteer} />
        </Switch>
   	  <Footer />
    </div>
  </Router>;

export default App;
