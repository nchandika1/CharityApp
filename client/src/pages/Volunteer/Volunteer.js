import React, { Component } from "react";
import "./Volunteer.css";
import API from "../../utils/API";
import Navigation from '../../components/Nav';

class Volunteer extends Component {
  state = {
    user: {}, // Represents user information
    yearToDate: 0
  };

	componentDidMount() {
    let elem = document.querySelector('body');
    elem.classList.remove('large');
    elem.classList.add('large2');
  }

  render() {
    return (
      <div>
      	<Navigation user={this.props.match.params.userid} /> 
      	<div className="account-welcome">VOLUNTEER HOURS COMING SOON!</div>
      </div>    
    );
  }
}

export default Volunteer;
