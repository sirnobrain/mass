'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Username is required'
        },
        len: [6, 20]
      },
      unique: {
        args: true,
        msg: 'Validation Error: Username already exists'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Password is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Role is required'
        }
      }
    }
  });
  return User;
};
