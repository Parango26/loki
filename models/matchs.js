const Sequelize = require('sequelize');
const sequelize = require('../middlewares/database') 
const Country = require('./countrys')
const League = require('./leagues')

const match = sequelize.define('matchs', {
  id: {
      type: Sequelize.BIGINT(11),
      primaryKey: true
  },
  countryId:{
    type: Sequelize.BIGINT(11),
    references: {
        model: Country,
        key: 'id'
      }
  },
  leagueId:{
    type: Sequelize.BIGINT(11),
    references: {
        model: League,
        key: 'id'
      }
  },
  matchDate: Sequelize.DATE,
  matchStatus: Sequelize.STRING,
  matchHomeTeamName: Sequelize.STRING,
  matchHometeamScore:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  } ,
  matchAwayteamName: Sequelize.STRING,
  matchAwayteamScore:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  } ,
  matchLive: {
    type: Sequelize.BOOLEAN, 
    allowNull: false, 
    defaultValue: false
  },
  shotsOnTargetHome: Sequelize.INTEGER,
  shotsOnTargetAway: Sequelize.INTEGER,
  shotOffTargetHome: Sequelize.INTEGER,
  shotOffTargetAway: Sequelize.INTEGER,
  possessionHome: Sequelize.INTEGER,
  possessionAway: Sequelize.INTEGER,
  cornersHome: Sequelize.INTEGER,
  cornersAway: Sequelize.INTEGER,
  offsidesHome: Sequelize.INTEGER,
  offsidesAway: Sequelize.INTEGER,
  foulsHome: Sequelize.INTEGER,
  foulsAway: Sequelize.INTEGER,
  yellowCardsHome: Sequelize.INTEGER,
  yellowCardsAway: Sequelize.INTEGER,
  goalKicksHome: Sequelize.INTEGER,
  goalKicksAway: Sequelize.INTEGER,
  treatmentsHome: Sequelize.INTEGER,
  treatmentsAway: Sequelize.INTEGER

}, {
    tableName: 'tblmatch',
    timestamps: false
  })

  module.exports = match