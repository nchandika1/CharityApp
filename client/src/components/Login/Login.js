import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import API from '../../utils/API.js';

class Login extends React.Component{

  getOrCreateUser = user => {
    // Create User only if the entry doesn't already exist.
    API.saveUser(user)
       .then(res => {
          console.log(`Created: ${JSON.stringify(res.data)}`);
          this.props.onLoginChange(true, user.email, user.id);
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
      <div>
        <GoogleLogin socialId="30112038592-893k01ohoonmndj1snfrndf50dp05sf5.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={true}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }
 
}
 
export default Login;
