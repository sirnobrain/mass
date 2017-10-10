'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Validation Error: Username is required'
        },
        isAlphanumeric: {
          msg: 'Validation Error: Username can only contain alphanumeric'
        }
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
        },
        len: {
          args: [6, 20],
          msg: 'Validation Error: Password must have 6-20 characters'
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
