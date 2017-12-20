import React, { Component } from "react";

import API from "../../utils/API";
// import { Link } from "react-router-dom";


class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>    
        <h1>Current Users</h1>
        {this.state.users.length ? (
          this.state.users.map(user => (
            <p><strong>
                {user.email} by {user.firstName}
            </strong></p>
          ))) 
          : (<h3>No Results to Display</h3>)
        }
      </div>    
    );
  }
}

export default Users;
