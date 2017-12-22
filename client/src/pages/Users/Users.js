import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';
// import "./Users.css";

class Users extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUser(this.props.user)
      .then(res => {
          this.setState({ user: res.data })
          console.log("getUser: " + JSON.stringify(res.data));
        }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navigation user={this.state.user.id} />
        {this.state.user ? (
          <h2>Hello, {this.state.user.firstName} {this.state.user.lastName}</h2>
        ) : (<p>No User</p>)}
      </div>    
    );
  }
}

export default Users;
