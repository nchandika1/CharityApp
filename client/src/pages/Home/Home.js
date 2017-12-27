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
		id: 0
	}

	componentDidMount() {
		let elem = document.querySelector('body');
		elem.classList.add('large');

		// ParseInt except radix parameter.  Pass "10" to indicate decimal
		if (parseInt(this.props.user, 10)) {
			this.setState({id: this.props.user, loggedIn: true});
		}
	}

	onLogInChange(userLogIn, userId) {
		// Update state in App component
		// This is used later on when the page is reloaded from the Nav buttons
		// This allows to keep track of which user is logged in without redirecting
		// the user to the login page once logged in.
		this.props.onUserLogIn(userLogIn, userId); 

		// Set internal state for this component
		this.setState({loggedIn: userLogIn, id: userId});		
	}

  render() {
    return (
      <div className="container-fluid">
      	{parseInt(this.state.id, 10) !== 0 ?  (<Users user={this.state.id} />) :    
      	(<Login loggedIn={this.state.loggedIn} onLoginChange={this.onLogInChange}/>)}      	     
     </div>
  	);
 	}
}

export default Home;