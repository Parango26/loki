var League = require('../models/leagues')
var Helpers = require('../helpers/helpers')
var axios = require('axios')
var config = require('../config')
var cons = require('../constant')


async function getWinners(){
    var urlApi= urlApi+cons.url_api_apifootball+"?action="+cons.action_get_standings+"&APIkey="+config.token_api_apifootball+"&league_id="
    const league = await League.findAll()
    console.log(league.get())


}


module.exports = {getWinners}