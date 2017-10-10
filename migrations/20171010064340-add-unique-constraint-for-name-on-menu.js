'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addConstraint('Menus', ['name'], {
      type: 'unique',
      name: 'unique_constraint_menu_name'
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeConstraint('Menus', 'name');

  }
};
