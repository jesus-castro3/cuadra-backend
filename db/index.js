const Sequelize = require('sequelize');
const sequelize = new Sequelize('cuadra', 'root', '',  {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
});

sequelize
  .authenticate()
  .then(() => {
    console.log('sequelize has been established successfully.');
  })
  .catch( err => {
    console.log('Unable to connect to the database', err);    
  });








module.exports = sequelize;