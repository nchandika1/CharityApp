import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';
import Greeting from '../../components/Greeting'; 
import Chart from "../../components/Chart";
import "./Users.css";

class Users extends Component {
  state = {
    user: {}, // Represents user information
    contrib: [] // Represents annual $$ contributions for this user
  };

  // Actions when the component mounts
  // In this case, get the user information from the database and render the information
  componentDidMount() {
    this.loadUserData();    
    let elem = document.querySelector('body');
    elem.classList.remove('large');
    elem.classList.add('large2');
  }

  // Function to get the annual contribution information for the user
  // This is used to load charts on this page
  getAnnualContributions(user) {
    console.log(user.id);
    API.getAnnualsByUser(user.id)
      .then(res => {
        let annualData = [];
        res.data.map(obj => {
          annualData.push({year: obj.year, total: obj.total});
        }); 
        // Sort by year
        annualData = annualData.sort( (a, b) => (a.year - b.year) );
        this.setState({user: user, contrib: annualData});
      });
  }

  // Function to get user information
  loadUserData() {
    API.getUser(this.props.user)
      .then(res => {
          this.getAnnualContributions(res.data);
        }
      )
  };

  render() {
    return (
      <div> 
        <Greeting name={`${this.state.user.firstName} ${this.state.user.lastName}`}/> 
        <Navigation user={this.state.user.id} /> 
        <div id="container-fluid">
          <div className="row">
            {this.state.user ? (
              <div>
                <div className="row chart-style">
                {this.state.contrib.length ?
                  (<Chart contrib={this.state.contrib}/>)
                  :(<p>No Data Available yet</p>)}
                </div>
                <div className="row">
                </div>
              </div>
            ) : (<p>No User</p>)}
          </div>  
        </div>
      </div>  
    );
  }
}

export default Users;
