//Dependencies
import React from "react";
import "./Signout.css";
import Navigation from '../../components/Nav';


const Signout = (props) => {
	return(
		<div>
			<Navigation user={props.match.params.userid} /> 
			<div className="signout-text">
				<p>Thank you for generous donations.</p>
				<p>Please like us on Facebook and leave a review on Yelp</p>
			</div>
			<div className="logout">
				<a href="/">Log Me Out</a>
			</div>
		</div>
		);
}

export default Signout;