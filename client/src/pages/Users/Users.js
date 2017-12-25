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

  componentDidMount() {
    this.loadUserData();    
    let elem = document.querySelector('body');
    elem.classList.remove('large');
    // elem.classList.add('large2');
  }

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
        
        console.log("State User");
        console.log(this.state);
      });
  }

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
        <Navigation user={this.state.user.id} /> 
        <Greeting /> 
        <div id="container-fluid">
          <div className="row">
            {this.state.user ? (
              <div>
                <p>{this.state.user.email}</p>
                <div className="row chart-style">
                {this.state.contrib.length ?
                  (<Chart contrib={this.state.contrib}/>)
                  :(<p>No Data Available yet</p>)}
                </div>
                <div className="row">
                  <h3>NEWS FEEDS HERE</h3>
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
