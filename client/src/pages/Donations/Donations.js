// Dependencies
import React, {Component} from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';

class Donations extends Component {
  state = {
    donations: [],
    myDonations: []
  }

  componentDidMount = () => {
    this.populateMyDonations(this.props.match.params.userid);
  }

  populateSearchDonations(proposals) {
    let objArray = proposals.map(org => {
      return ({
        orgName: org.title,
        orgId: org.id,
        url:org.proposalURL,
        fundUrl: org.fundURL,
        costToComplete: org.costToComplete,
        totalPrice: org.totalPrice,
        fulfillmentTrailer: org.fulfillmentTrailer 
      });
    });

    console.log("Obj: ", objArray);
    this.setState({donations: objArray});
  }

  handleSearchDonations = (event, location) => {
    const locationData = {
      city: "Menlo Park",
      state: "CA"
    };
    event.preventDefault();
    API.searchDonationsByLocation(locationData)
       .then(res => {
        const data = JSON.parse(res.data.body);
        console.log(data.proposals);
        this.populateSearchDonations(data.proposals);
       })
       .catch(err => console.log(err));
  }

  handleFavorite = (org) => {
    // Add on extra field to the org object
    org.UserId = this.props.match.params.userid;
    console.log(org);

    API.saveDonation(org)
      .then(res => {
        this.populateMyDonations(this.props.match.params.userid)
      })
      .catch(err => console.log(err));
  }

  populateMyDonations(userid) {
    API.getDonationsByUser(userid)
      .then(res => {
       this.setState({myDonations: res.data});
      })
  }

  render() {
    let userid = this.props.match.params.userid;
    console.log(`Donations ${userid}`);
    return (
      <div>
        <h3> My Donations </h3>
        {this.state.myDonations.map((donation, i) =>
          <div key={i}>
            <li>
              <a href={donation.url} target="_blank">{donation.orgName}</a>  
              <a href="#">Donate</a>
            </li>
          </div>
        )}
        <h3>Search Donations</h3>
        { this.state.donations ?
        (<ul>
          {this.state.donations.map(donation => 
            <div key={donation.orgId}>
            <li>
              <a href={donation.url} target="_blank">{donation.orgName}</a>
              <button onClick={() => this.handleFavorite(donation)}>Favorite</button>
              <p>{donation.fulfillmentTrailer}</p>
            </li>
            </div>
          )}
        </ul>) : ( <h4>No Donations</h4>) }
        <button onClick={this.handleSearchDonations}>Search</button>
      </div>
    );
  }
}

export default Donations;
