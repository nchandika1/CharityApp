import React, { Component } from "react";
import Navigation from "../../components/Nav";
import API from "../../utils/API";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    API.updateUser(this.state);
    let saved = document.getElementById("savedText");
    saved.innerText = "Saved!"
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    API.getUser(this.props.match.params.userid)
      .then(res => {
          this.setState(res.data);
        }
      );
    let saved = document.getElementById("savedText");
    saved.innerText = "";
  }

  render() {
    if (this.state) {
      return (
        <div>
          <Navigation user={this.state.id} />
          <div className="account-welcome">
            <h3>ACCOUNT INFORMATION</h3>
          </div>    
          <div className="member-info">
            <span><img src={this.state.image} /> 
              <br />MEMBER NAME: {this.state.firstName} {this.state.lastName}
              <br />EMAIL: {this.state.email}
            </span>
          </div>
          <div>
            <form className="profile-form" onSubmit={this.handleSubmit}>
              <label>
                <input 
                  name="addrLine1" 
                  value={this.state.addrLine1 ? this.state.addrLine1 : ''} 
                  onChange={this.handleChange} 
                  type="text" 
                  placeholder="Address Line 1" />
              </label>
              <label>
                <input 
                  name="city" 
                  value={this.state.city ? this.state.city : ''} 
                  onChange={this.handleChange} 
                  type="text" 
                  placeholder="City" />
              </label>
              <label>
                <input 
                  name="state" 
                  value={this.state.state ? this.state.state : ''} 
                  onChange={this.handleChange} 
                  type="text" 
                  placeholder="State" />
              </label>
              <label>
                <input 
                  name="zipCode" 
                  value={this.state.zipCode} 
                  onChange={this.handleChange} 
                  type="text" 
                  placeholder="Zip Code" />
              </label>
              <input type="submit" value="Submit" />
              <span id="savedText"></span>
            </form>
            <br />
          </div>
        </div>
      );
    }
    return(<p>No Profile information available for this user!</p>);
  }
}

export default Profile;