'use strict';
module.exports = (sequelize, DataTypes) => {
  var Table = sequelize.define('Table', {
    tableNumber: DataTypes.STRING,
    isEmpty: DataTypes.BOOLEAN
  });
  return Table;
};
