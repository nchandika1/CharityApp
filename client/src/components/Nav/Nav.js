// Dependencies
import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./Nav.css";

// Navigation bar for the User 
// Note: this component gets "props" to identify user by its "id"
// Use the "id" to route the user to the proper page
class Navigation extends React.Component {
	render () {
    return (
      <Menu right >
          <a id="home" className="menu-item name" href="/">HOME</a>
          <a id="profile" className="menu-item name" href={"/profile/"+this.props.user}>MY PROFILE</a>
          <a id="donate" className="menu-item name" href={"/donate/"+this.props.user}>DONATE</a>
          <a id="volunteer" className="menu-item name" href={"/volunteer/"+this.props.user}>VOLUNTEER</a>
          <a id="signout" className="menu-item name" href="/">SIGNOUT</a>
      </Menu>
    );
  }
}

export default Navigation;
