// Dependencies
import React from 'react';
import "./Greeting.css";

// Render User Greeting for the Home page
class Greeting extends React.Component {
  render() {
  	return (
    	<div className="container">
				<span className="greeting">Welcome {this.props.name}!</span>
			</div>
  	);
   }
}

export default Greeting;