const { Sequelize } = require('sequelize');
const config = require('./config.js');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
      host: config.HOST,
      dialect: config.dialect
    }
  );
 
sequelize.authenticate().then(() => {
  console.log('database connected')
}).catch(err => {
  console.log(err)
})
module.exports = sequelize;
