import React from 'react';
import Login from '../../components/Login';
import Users from '../Users';
import "./Home.css";


class Home extends React.Component {

	constructor(props) {
    	super(props);
    	this.onLogInChange = this.onLogInChange.bind(this);
	}

	state = {
		loggedIn: false,
		email: ""
	}

	onLogInChange(userLogIn, userEmail) {
		this.setState({loggedIn: userLogIn, email: userEmail});
		console.log('Home: ' + this.state.loggedIn);
		console.log('Home: ' + this.state.email);
	}

  render() {	
    return (
      <div className="container-fluid">
      	{this.state.loggedIn ?  (<Users user={this.state.email} />) :    
      	(<Login loggedIn={this.state.loggedIn} onLoginChange={this.onLogInChange}/>)}      	     
     </div>
  	);
 	}
}

export default Home;