import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import "./Nav.css";

class Navigation extends React.Component {
   
 

	render () {
    return (
      <Menu right >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="donations" className="menu-item" href="/donations">Donations</a>
        <a id="users" className="menu-item" href="/users">Users</a>
      </Menu>
    );
  }
}

export default Navigation;
