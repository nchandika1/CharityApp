// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Donations from "./pages/Donations";
import Profile from "./pages/Profile";
import Volunteer from "./pages/Volunteer";
import Signout from "./pages/Signout";

// Main component rendered in the index.html
class App extends React.Component {
  constructor(props) {
    super(props);
    this.onUserLogIn = this.onUserLogIn.bind(this);
    this.state = {
      loggedIn: false,
      id: 0
    };
  }

  onUserLogIn(loggedIn, id) {
    this.setState({loggedIn: loggedIn, id: id});
  }

  render() {
    return(
      <Router>
      <div className="container-fluid">
        <div>
          <Header />
            <Switch>
              <Route exact path="/" render={()=><Home onUserLogIn={this.onUserLogIn} user={this.state.id}/>} />
              <Route exact path="/profile/:userid" component={Profile} />
              <Route exact path="/donate/:userid" component={Donations} />
              <Route exact path="/volunteer/:userid" component={Volunteer} />
              <Route exact path="/signout/:userid" component={Signout} />
            </Switch>
       	  <Footer />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
