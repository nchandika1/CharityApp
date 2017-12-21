import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navigation
import Home from "./pages/Home";
import Header from "./components/Header";
// import Users from "./pages/Users";
import Donations from "./pages/Donations";
import Footer from "./components/Footer";


const App = () =>
  <Router>
    <div>
    <header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/donations" component={Donations} />
      </Switch>
   	<Footer />
    </div>
  </Router>;


export default App;
