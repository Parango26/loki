const config = require('../config')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.name_db, config.user, config.password, {
  dialect: config.dialect,
  host: config.host,
  pool: {
    max: config.connection_limit,
    idle: 300000,
    acquire: 600000,
  },
  hooks: {
  }
  
})



module.exports = sequelize