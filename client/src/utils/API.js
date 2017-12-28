import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets a given User with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Save a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Update user profile to the database
  updateUser: function(userData) {
    return axios.put("/api/users/" + userData.id, userData);
  },
  // Get Donations from the database
  searchDonationsByLocation: function(locationData) {
    return axios.post("/api/search/donations", locationData);
  },
  getDonations: function(id) {
    return axios.get("/api/donation/" + id);
  },
  saveDonation: function(donateData) {
    console.log("API: " + JSON.stringify(donateData));
    return axios.post("/api/donation", donateData);
  },
  getDonationsByUser: function(userId) {
    return axios.get("/api/donation/user/" + userId);
  },
  updateDonationById: function(userId, id, updateData) {
    return axios.put("/api/donation/" + userId + "/" + id, updateData);
  },
  deleteDonationById: function(id) {
    return axios.delete("/api/donation/" + id);
  },
  getAnnualByYear: function(year) {
    return axios.get("/api/annual/year/" + year);
  },
  getAnnualsByUser: function(user) {
    return axios.get("/api/annual/user/" + user);
  },
  saveAnnual: function(data) {
    return axios.post("/api/annual",data)
  },
  updateAnnual: function(id, data) {
    return axios.put("/api/annual/" + id, data);
  }
};
