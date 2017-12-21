import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';

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
        <h1>Current User</h1>
        {this.state.users ? (<p>{this.state.users.email}</p>) : (<p>No User</p>)}
      </div>    
    );
  }
}

export default Users;
