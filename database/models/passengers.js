const {Model, Sequelize} = require('sequelize');
const sequelize = require('../index.js');
class Passengers extends Model {}
Passengers.init({
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
  firstName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
}, {sequelize, modelName: 'passengers'})
module.exports = Passengers;