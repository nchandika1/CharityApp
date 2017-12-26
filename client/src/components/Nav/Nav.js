// Dependencies
import React from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import "./Nav.css";

// Navigation bar for the User 
// Note: this component gets "props" to identify user by its "id"
// Use the "id" to route the user to the proper page
class Navigation extends React.Component {
	render () {
    return (
      <Menu right >
          <Link to="/">HOME</Link>
          <Link to={"/profile/"+this.props.user}>MY PROFILE</Link>
          <Link to={"/donate/"+this.props.user}>DONATE</Link>
          <Link to={"/volunteer/"+this.props.user}>VOLUNTEER</Link>
          <Link to={"/signout/"+this.props.user}>SIGNOUT</Link>
      </Menu>
    );
  }
}

export default Navigation;
