'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        username: 'dimitri',
        password: '$2a$08$QbVG4M8CB.9qvBb/mSqvqucC.ZvvRqZwYeRvytDfjtX4vW/n1A9OK',
        role: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
