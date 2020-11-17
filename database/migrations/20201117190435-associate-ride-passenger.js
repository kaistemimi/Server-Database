'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RidePassengers', 
      { 
        rideId: {
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        passengerId: {
          primaryKey: true,
          type: Sequelize.INTEGER
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RidePassengers');
  }
};
