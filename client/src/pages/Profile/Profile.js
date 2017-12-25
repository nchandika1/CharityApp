import React, { Component } from "react";
import Navigation from '../../components/Nav';
import "./Profile.css";

class Profile extends Component {


	componentDidMount() {
		this.loadUser();
		let elem = document.querySelector('body');
		elem.classList.remove('large');
		elem.classList.add('large2');
  }


	render() {
		return (
			<div className="row">
				<p>"No Profile yet!"</p>
			</div>    
		);
	}
}

export default Profile;
