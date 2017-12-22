//The main component that goes into index.html

// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./pages/Users";

// Main component rendered in the index.html
const App = () =>
  <Router>
  <div className="container-fluid">
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/Donations" component={Users} />
        </Switch>
   	  <Footer />
    </div>
  </div>
  </Router>;

export default App;
