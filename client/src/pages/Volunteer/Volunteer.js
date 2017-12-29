import React, { Component } from "react";
import "./Volunteer.css";
import API from "../../utils/API";
import Navigation from '../../components/Nav';

class Volunteer extends Component {

  render() {
    return (
      <div>
      	<Navigation />
        <p>"No Volunteers yet!"</p>
      </div>    
    );
  }
}

export default Volunteer;
