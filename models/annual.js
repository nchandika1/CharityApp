// Makes the Donation Model available to other files.
// Also creates the table
module.exports = function(sequelize, DataTypes) {

  // Create User model
  var Annual = sequelize.define("Annual", {
    year: {
      type: DataTypes.STRING
    },
    total: {
      type: DataTypes.INTEGER
    }
  });

  // Annual has a foreign key dependency on User
  Annual.associate = (models) => {
    Annual.belongsTo(models.User, {
      // Annual has to be created for a user so user ID cannot be null
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Annual;
};