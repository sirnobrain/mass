'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addConstraint('Orders', ['TableId'], {
      type: 'FOREIGN KEY',
      name: 'fk_constraint_order_tableid',
      references: {
        table: 'Tables',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'cascade'
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeConstraint('Orders', 'TableId');

  }
};
