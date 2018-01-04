import React from 'react';
import "./Login.css";
import { GoogleLogin } from 'react-google-login-component';
import API from '../../utils/API.js';

class Login extends React.Component{

  getOrCreateUser = user => {
    // Create User only if the entry doesn't already exist.
    API.saveUser(user)
       .then(res => {
          console.log(`Created: ${JSON.stringify(res.data)}`);
          this.props.onLoginChange(true, res.data.id);
        });
  } 
 
  responseGoogle = googleUser => {
    // let id_token = googleUser.getAuthResponse().id_token;
    let profile = googleUser.getBasicProfile();
    let userObj = {
      email: profile.getEmail(),
      firstName: profile.getGivenName(), 
      lastName: profile.getFamilyName(), 
      image: profile.getImageUrl()
    };

    this.getOrCreateUser(userObj);
  }
 
  render () {
    return (
      <div className="container-fluid">
        <div id="Modal">
	        <div>
	          <GoogleLogin socialId="922886755402-9ep8flv0f4upesth6smas38d6cuo7h4k.apps.googleusercontent.com"
	                       className="Google-Login"
	                       scope="profile"
	                       fetchBasicProfile={true}
	                       responseHandler={this.responseGoogle}
	                       buttonText="Continue With Google" />
	        </div>
        </div>
      </div>
    );
  }
}
 
export default Login;