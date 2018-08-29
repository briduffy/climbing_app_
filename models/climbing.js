'use strict';
module.exports = (sequelize, DataTypes) => {
  const Climbing = sequelize.define('Climbing', {
    route: DataTypes.STRING,
    grade: DataTypes.STRING,
    rating: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Climbing.associate = function(models) {
    // associations can be defined here
  };
  return Climbing;
};