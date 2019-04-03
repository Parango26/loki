const Sequelize = require('sequelize');
const sequelize = require('../middlewares/database') 

const leagues = sequelize.define('leagues', {
  id: {
      type: Sequelize.BIGINT(11),
      primaryKey: true
  },
  name: Sequelize.STRING
}, {
    tableName: 'tblleague',
    timestamps: false
  });

  module.exports = leagues