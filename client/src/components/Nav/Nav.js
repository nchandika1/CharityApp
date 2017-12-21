import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./Nav.css";

class Navigation extends React.Component {
   
 

	render () {
    return (
      <Menu right >
        <a id="home" className="menu-item name" href="/">HOME</a>
        <a id="donations" className="menu-item name" href="/donations">DONATIONS</a>
        <a id="users" className="menu-item name" href="/users">USERS</a>
      </Menu>
    );
  }
}

export default Navigation;
