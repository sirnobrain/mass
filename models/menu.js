'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Name is required'
        }
      },
      unique: {
        args: true,
        msg: 'Validation Error: Name already exists'
      }
    },
    picture: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Price is required'
        },
        isFloat: {
          msg: 'Validation Error: Price is not valid'
        },
        min: {
          args: 100,
          msg: 'Validation Error: Minimal Price is 100'
        }
      }
    },
    isAvailable: {
      type: DataTypes.BOOLEAN
    }
  });

  Menu.associate = function(models) {

    Menu.hasMany(models.Order);
    Menu.belongsToMany(models.Table, { through: 'Order' });

  }

  return Menu;
};
