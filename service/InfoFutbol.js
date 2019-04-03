var config = require('../config')
var cons = require('../constant')
var axios = require('axios')
var moment = require('moment')
var Helpers = require('../helpers/helpers')

var Country = require('../models/countrys')
var League = require('../models/leagues')
var Match = require('../models/matchs')

async function getInfoFutbol(){
    let from = moment(new Date).subtract(1, 'days').format(cons.format_date)
    let to = moment(new Date).format(cons.format_date)
    var urlApi= urlApi+cons.url_api_apifootball+"?action="+cons.action_get_events+"&APIkey="+config.token_api_apifootball+"&from="+from+"&to="+to

    const response = await axios.get(urlApi)
    var data = response.data
    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

    const start = async () => {
      await Helpers.asyncForEach(data, async (item) => {
        try{
          if(!cons.leaguesIds.includes(item.league_id))
            return
          const country = await Country.findOrCreate({where: {id:item.country_id , name:item.country_name}})
          const league = await League.findOrCreate({where: {id:item.league_id, name:item.league_name}})
          const match = await Match.findByPk(item.match_id)
          if(match == null ){
            await Match.create(Helpers.mappingJsonMatch(item))
            console.log("Partido Creado")
          }else{
            match.update(Helpers.mappingJsonMatch(item))
            console.log("Partido actualizado")
          }
        }catch(e){
          console.log(e)
        }
        await waitFor(50);
      });
      console.log('Partidos cargados! ');
    }

    start();
    
}

module.exports = {getInfoFutbol}
 
