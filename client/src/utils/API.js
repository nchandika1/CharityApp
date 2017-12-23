import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets a given User with the given id = email
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
  }
};
