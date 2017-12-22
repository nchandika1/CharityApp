import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';
import Greeting from '../../components/Greeting'; 

// import "./Users.css";

class Users extends Component {
  state = {
    users: {}
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUser(this.props.user)
      .then(res => {
          this.setState({ users: res.data })
          console.log("getUser: " + JSON.stringify(res.data));
        }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div> 
        <Navigation />  
        <Greeting /> 
        <div id="container-fluid">
          <div className="row">
            <div className="NameGreeting"><h2>Current User</h2></div>
            {this.state.users ? (<p>{this.state.users.email}</p>) : (<p>No User</p>)}
              <div className="row">
              <h3>NEWS FEEDS HERE</h3>
            </div>
            <div className="row">
              <h3>CHARTS HERE</h3>
            </div>
          </div>  
        </div>
      </div>  
    );
  }
}

export default Users;
