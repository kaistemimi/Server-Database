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
      Ride.belongsTo(models.Driver, {
        foreignKey: 'driverId',
        onDelete: 'CASCADE'
      })
      Ride.hasMany(models.Feedback, {
        foreignKey: 'rideId',
      })
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
    stop1: DataTypes.STRING,
    stop2: DataTypes.STRING,
    stop3: DataTypes.STRING,
    stop4: DataTypes.STRING,
    driverId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ride',
  });
  return Ride;
};