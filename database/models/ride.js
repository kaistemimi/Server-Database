'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ride extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ride.init({
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    seats: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    checkedStatus: DataTypes.BOOLEAN,
    ratedStatus: DataTypes.BOOLEAN,
    stopId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ride',
  });
  return Ride;
};