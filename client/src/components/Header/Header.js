import React from 'react';
import "./Header.css";
import logo from './hopeapplogo2.png';

console.log(logo); 

function Header() {
	return (
		<div className=".header-style">
	 <img src={logo} alt="Logo" />; 
	</div>
	);
}

export default Header;