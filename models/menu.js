'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    isAvailable: DataTypes.BOOLEAN
  });
  return Menu;
};
