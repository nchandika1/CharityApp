// Makes the Donation Model available to other failes.
// Also creates the table
module.exports = function(sequelize, DataTypes) {

  // Create User model
  var Donation = sequelize.define("Donation", {
    orgName: {
      type: DataTypes.STRING
    },
    orgId: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    donatedAmount: {
      type: DataTypes.STRING
    },
    donatedDate: {
      type: DataTypes.DATE
    },
    favorite: {
      type: DataTypes.BOOLEAN
    }
  });

  // Donation has a foreign key dependency on USer
  Donation.associate = (models) => {
    Donation.belongsTo(models.User, {
      // Donation has to be created for a user so user ID cannot be null
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Donation;
};