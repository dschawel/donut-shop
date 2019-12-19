'use strict';
module.exports = (sequelize, DataTypes) => {
  const shop = sequelize.define('shop', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    specialty: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.FLOAT
  }, {});
  shop.associate = function(models) {
    // associations can be defined here
    models.shop.hasMany(models.donut)
  };
  return shop;
};