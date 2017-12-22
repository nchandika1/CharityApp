import React, {Component} from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';

class Donations extends Component {
  state = {
    donations: []
  }

  componentDidMount = () => {
    console.log("Donations");
    this.loadDonations();
  }

  loadDonations = () => {
    const locationData = {
      city: "Menlo Park",
      state: "CA"
    };

    API.searchDonationsByLocation(locationData)
       .then(res => {
        console.log(res.data.body);
        const data = JSON.parse(res.data.body);
        console.log(data.proposals);
       })
       .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <Navigation /> 
        <h1> Donors search list goes here </h1>
      </div>
    );
  }

}


export default Donations;
