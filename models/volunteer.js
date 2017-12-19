// Makes the Volunteer Model available to other files.
// Also creates the table
module.exports = function(sequelize, DataTypes) {

  // Create Volunteer model
  var Volunteer = sequelize.define("Volunteer", {
    orgName: {
      type: DataTypes.STRING
    },
    orgId: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    volunteerHours: {
      type: DataTypes.STRING
    },
    dateVolunteered: {
      type: DataTypes.DATE
    },
    favorite: {
      type: DataTypes.BOOLEAN
    }
  });

  // Volunteer has a foreign key dependency on User
  Volunteer.associate = (models) => {
    Volunteer.belongsTo(models.User, {
      // Volunteer has to be created for a user so user ID cannot be null
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Volunteer;
};