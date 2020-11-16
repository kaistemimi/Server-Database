const {Model, Sequelize} = require('sequelize');
const sequelize = require('../index.js');

class Drivers extends Model {}

Drivers.init({
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.INTEGER
  },
  ICN: {
    type: Sequelize.INTEGER
  },
  driverLicence: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
}, {sequelize, modelName: 'drivers'})
module.exports = Drivers;