import React from 'react';
import Login from '../../components/Login';
import Users from '../Users';
import Content from '../../components/Content';

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

	onLogInChange(userLogIn, userEmail, userId) {
		this.setState({loggedIn: userLogIn, email: userEmail, id: userId});
	}

  render() {	
    return (
      <div>
        <Content buttface={true} />
      	{this.state.loggedIn ?  (<Users user={this.state.email} />) :    
      	(<Login loggedIn={this.state.loggedIn} onLoginChange={this.onLogInChange}/>)}      	     
    	</div>
  	);
 	}
}

export default Home;