'use strict';
module.exports = (sequelize, DataTypes) => {
  var Table = sequelize.define('Table', {
    tableNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Table Number is required'
        }
      }
    },
    isEmpty: DataTypes.BOOLEAN
  });
  return Table;
};
