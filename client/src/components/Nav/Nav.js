import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./Nav.css";

class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }

	render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="donations" className="menu-item" href="#">Donations</a>
        <a id="users" className="menu-item" href="#">Users</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Navigation;
