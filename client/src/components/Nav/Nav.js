import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import "./Nav.css";

class Navigation extends React.Component {
   
	render () {
   		return (
      		<Menu right >
        		<a id="home" className="menu-item" href="/">Home</a>
        		<a id="donations" className="menu-item" href="/donations">Donate</a>
        		<a id="volunteer" className="menu-item" href="/users">Volunteer</a>
        		<a id="profile" className="menu-item" href="/users">Profile</a>
      		</Menu>
    	);
  	}
}

export default Navigation;
