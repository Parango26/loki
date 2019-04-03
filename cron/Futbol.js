var schedule = require('node-schedule')
var InfoFuntbolService = require('../service/InfoFutbol')


async function infoFutbolCron(){
  var j = schedule.scheduleJob('* * 2 * * *', function(){
    InfoFuntbolService.getInfoFutbol();
  });
}

module.exports = {infoFutbolCron}
 
