// Dependencies
import React, {Component} from "react";
import API from "../../utils/API";
import Navigation from '../../components/Nav';

class Donations extends Component {
  state = {
    donations: []
  }

  componentDidMount = () => {
    this.loadDonations(this.props.match.params.userid);
  }

  loadDonations = (id) => {
    API.getDonations(id)
       .then(res => {
          console.log(res.data.body);
          this.setState({donations: res.data.body});
       })
       .catch(err => console.log(err));
  }

  populateDonations(proposals) {
    let objArray = proposals.map(org => {
        return ({orgName: org.title,
                 orgId: org.id,
                 url:org.proposalURL
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
        this.populateDonations(data.proposals);
       })
       .catch(err => console.log(err));
  }

  render() {
    let userid = this.props.match.params.userid;
    console.log(`Donations ${userid}`);
    return (
      <div>
        <h1> My Donations </h1>
        { this.state.donations ?
        (<h4>Donations!!!</h4>) : ( <h4>No Donations</h4>) }
        <button onClick={this.handleSearchDonations}>Search</button>
      </div>
    );
  }
}

export default Donations;
