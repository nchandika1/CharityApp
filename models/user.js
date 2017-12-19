// Makes the User Model available to other failes.
// Also creates the table
module.exports = function(sequelize, DataTypes) {

  // Create User model
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    addrLine1: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zipCode: {
      type: DataTypes.INTEGER
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Donation, {
      // When a user is deleted, also delete any associated Donations for that user
      onDelete: "cascade"
    });
  }

  return User;
};