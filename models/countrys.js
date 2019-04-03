const Sequelize = require('sequelize');
const sequelize = require('../middlewares/database') 

const countrys = sequelize.define('countrys', {
  id: {
      type: Sequelize.BIGINT(11),
      primaryKey: true
  },
  name: Sequelize.STRING
}, {
    tableName: 'tblcountry',
    timestamps: false
  });

  module.exports = countrys