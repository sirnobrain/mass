'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Menus', [
      {
        name: 'Nasi Goreng',
        price: 15000,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mie Goreng',
        price: 20000,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Es Teh',
        price: 5000,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Menus', null, {});

  }
};
