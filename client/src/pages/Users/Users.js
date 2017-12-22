import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';
import Greeting from '../../components/Greeting'; 

// import "./Users.css";

class Users extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.loadUser();
    let elem = document.querySelector('body');
    elem.classList.remove('large');
    elem.classList.add('large2');
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
        <Greeting /> 
        <div id="container-fluid">
          <div className="row">
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
