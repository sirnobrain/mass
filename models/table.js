'use strict';
module.exports = (sequelize, DataTypes) => {
  var Table = sequelize.define('Table', {
    tableNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Table Number is required'
        }
      },
      unique: {
        args: true,
        msg: 'Validation Error: Table Number already exists'
      }
    },
    isEmpty: DataTypes.BOOLEAN
  });

  Table.associate = function(models) {

    Table.hasMany(models.Order);
    Table.belongsToMany(models.Menu, { through: 'Order' });

  }

  return Table;
};
