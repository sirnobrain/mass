'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tables', [
      {
        tableNumber: '001',
        isEmpty: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tableNumber: '002',
        isEmpty: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tableNumber: '003',
        isEmpty: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tableNumber: '004',
        isEmpty: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tableNumber: '005',
        isEmpty: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tableNumber: '006',
        isEmpty: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tables', null, {});

  }
};
