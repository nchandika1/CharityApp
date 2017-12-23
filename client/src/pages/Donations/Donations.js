// Dependencies
import React, {Component} from "react";
import API from "../../utils/API";
// import Navigation from '../../components/Nav';

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
        <h3> My Donations </h3>
        {this.state.myDonations.map((donation, i) =>
          <div key={i}>
            <li>
              <a href={donation.url} target="_blank">{donation.orgName}</a>
              <p>Request: ${this.parseForDonationAmount(donation.fundUrl)}</p>
              <br />  
              <a href={donation.fundUrl} target="_blank" >Fund Page</a>
              <button onClick={() => this.handleDonate(donation)}>Donate</button>
            </li>
          </div>
        )}
        <hr />
        <h3>Search Donations</h3>
        <input type="text" placeholder="Zip Code" name="searchStr" onChange={this.handleInputChange} value={this.state.searchStr}/>
        <button onClick={this.handleSearchDonations}>Search</button>
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
        
      </div>
    );
  }
}

export default Donations;
