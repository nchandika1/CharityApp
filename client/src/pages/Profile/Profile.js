import React, { Component } from "react";
import Navigation from "../../components/Nav";
import API from "../../utils/API";
import "./Profile.css";

class Profile extends Component {

	state={
		user: {}
	}

	componentDidMount() {
		API.getUser(this.props.match.params.userid)
      .then(res => {
      		console.log(this.state);
          console.log(res.data);
          this.setState({user: res.data});
        }
      )
	}

  render() {
  	if (this.state.user) {
  		return (
  			<div>
          <Navigation user={this.state.user.id} />
	  			<p>Hello, {this.state.user.firstName} {this.state.user.lastName}!</p>
	  			<hr />
	  			
  			</div>
  		);
  	} else {
  		return(<p>No Profile information available for this user!</p>);
  	}
  }
}

export default Profile;
