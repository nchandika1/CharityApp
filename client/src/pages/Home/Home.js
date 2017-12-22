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
		email: "",
		id: 0
	}

	componentDidMount(){
		let elem = document.querySelector('body');
		elem.classList.add('large');
	}



	onLogInChange(userLogIn, userEmail, userId) {
		this.setState({loggedIn: userLogIn, email: userEmail, id: userId});
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