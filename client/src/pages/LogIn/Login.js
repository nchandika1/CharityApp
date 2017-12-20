// login page


// functions to make
  //handleFacebookLogin
    //axios.post
  //handleGoogleLogin
    //axios.post    
// inside render function
  //button onClick handleFacebookLogin
  //button onClick handleGoogleLogin

import React from "react";
import axios from "axios";
// require("index.css")
// By extending the React.Component class, Counter inherits functionality from it
class LogIn extends React.Component {
  // Setting the initial state of the Counter component

  // handleIncrement increments this.state.count by 1
  handleGoogleLogin = () => {
    axios.post("/loginGoogle")  
    .then(()=> this.props.location + "")
  }

  handleFacebookLogin = () => {
    axios.post("/loginFacebook")  
  }

  // The render method returns the JSX that should be rendered
    render() {
      return (
        <div>
          <button className="Facebook-Login" onClick={this.handleFacebookLogin}>Facebook-Login</button>

          <button className="Google-Login" onClick={this.handleGoogleLogin}>Google-Login</button>
        </div>
      );             
  }
}    
   



export default LogIn;