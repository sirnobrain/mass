'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    TableId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    note: DataTypes.STRING,
    batch: DataTypes.STRING,
    isReady: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER,
    pricePaid: DataTypes.FLOAT
  });

  Order.associate = function(models) {

    Order.belongsTo(models.Table, { onDelete: 'restrict' });
    Order.belongsTo(models.Menu, { onDelete: 'restrict' });

  }

  return Order;
};
