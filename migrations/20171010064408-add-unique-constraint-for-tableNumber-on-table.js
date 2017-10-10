'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addConstraint('Tables', ['tableNumber'], {
      type: 'unique',
      name: 'unique_constraint_table_tablenumber'
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeConstraint('Tables', 'tableNumber');

  }
};
