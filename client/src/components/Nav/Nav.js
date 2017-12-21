import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./Nav.css";

class Navigation extends React.Component {
   
	render () {
    return (
      <Menu right >
        <a id="home" className="menu-item name" href="/">HOME</a>
        <a id="profile" className="menu-item name" href="/donations">MY PROFILE</a>
        <a id="donate" className="menu-item name" href="/users">DONATE</a>
        <a id="volunteer" className="menu-item name" href="/users">VOLUNTEER</a>
        <a id="signout" className="menu-item name" href="/users">SIGNOUT</a>
      </Menu>
    );
  }
}

export default Navigation;
