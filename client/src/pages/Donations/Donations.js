// Dependencies
import React, {Component} from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';
import "./Donations.css";

class Donations extends Component {
  state = {
    donations: [],
    myDonations: [],
    searchStr: ""
  }

  componentDidMount = () => {
    this.populateMyDonations(this.props.match.params.userid);
  }

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({searchStr: event.target.value})
  }

  populateSearchDonations = proposals => {
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

  handleSearchDonations = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Search by Zip for now
    const locationData = {
      zip: this.state.searchStr
    }

    if (locationData.zip) {
      // Empty the last search results saved in donations
      this.setState({donations: []});

      // Start a new search for a given Zip Code
      API.searchDonationsByLocation(locationData)
         .then(res => {
          const data = JSON.parse(res.data.body);
          console.log(data.proposals);
          this.populateSearchDonations(data.proposals);
         })
         .catch(err => console.log(err));
     }
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

  parseForDonationAmount = url => {
    let amount = 0;
    if (url.includes("donationAmount")) {
      url.split("&").map( item => {
          if (item.includes("donationAmount")) {
            amount = parseInt(item.split("=")[1]);
          }
      })
    }
    return amount;
  }

  handleDonate = donation => {
    console.log("handleDonate");
    const donationAmount = this.parseForDonationAmount(donation.fundUrl);
    const data = {
      donatedAmount : parseInt(donation.donatedAmount) + donationAmount
    }
    console.log(data.donatedAmount)
    API.updateDonationById(this.props.match.params.userid, donation.id, data);
  }

  render() {
    let userid = this.props.match.params.userid;
    console.log(`Donations ${userid}`);
    return (
      <div>
        <Navigation user={userid} /> 
        <br />
        <div className="headline"> My Donations </div>
        <br />
        {this.state.myDonations.map((donation, i) =>
          <div key={i} className="donation-item">
            <a className="donation-title" href={donation.url} target="_blank">{donation.orgName}</a>
            <div className="donation-subtitle">
              <span>Request: ${this.parseForDonationAmount(donation.fundUrl)}</span> | 
              <span>Total Donated: ${donation.donatedAmount}</span> | 
              <a href={donation.fundUrl} target="_blank" > Fund Page</a> | 
              <a href="#" onClick={() => this.handleDonate(donation)}> Donate</a> | 
              <a href="#">Archive</a>
            </div>
          </div>
        )}
        <br />
        <div className="headline"> My Search </div>
        <div className="search-button">
          <input type="text" placeholder="Zip Code" name="searchStr" onChange={this.handleInputChange} value={this.state.searchStr}/>
          <button onClick={this.handleSearchDonations}>Search</button>
        </div>
        <div>
        { this.state.donations.length ?
          (this.state.donations.map(donation => 
            <div key={donation.orgId} className="search-item">
              <a href={donation.url} target="_blank">{donation.orgName}</a>
              <button className="favorite-icon" onClick={() => this.handleFavorite(donation)}>
                &#9829;
              </button>
              <div className="search-subtitle">
                <p>{donation.fulfillmentTrailer}</p>
              </div>
            </div>
          ))
          : ( <div className="no-search">Type in ZipCode to display Donations by Loation</div>) }
        </div>
      </div>
    );
  }
}

export default Donations;
