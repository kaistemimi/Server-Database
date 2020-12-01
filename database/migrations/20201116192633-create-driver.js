'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        isUnique: true,
        validate: {
          isEmail:true,
          isUnique: sequelize.validateIsUnique('email')
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(60),
        is:/^[0-9a-f]{60}$/i
      },
      ICN: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      driverLicense: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      timesRated: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Drivers');
  }
};
