'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Orders', ['MenuId'], {
      type: 'FOREIGN KEY',
      name: 'fk_constraint_order_menuid',
      references: {
        table: 'Menus',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeConstraint('Orders', 'MenuId');

  }
};
