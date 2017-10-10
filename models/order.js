'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    TableId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    note: DataTypes.STRING,
    batch: DataTypes.STRING,
    isReady: DataTypes.BOOLEAN
  });
  return Order;
};
