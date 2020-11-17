'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stop.init({
    stop1: DataTypes.STRING,
    stop2: DataTypes.STRING,
    stop3: DataTypes.STRING,
    stop4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stop',
  });
  return Stop;
};