function mappingJsonMatch(jsonForApi){
    var objReturn = {
        id: jsonForApi.match_id ,
        countryId: jsonForApi.country_id ,
        leagueId: jsonForApi.league_id ,
        matchDate: jsonForApi.match_date , 
        matchStatus: jsonForApi.match_status , 
        matchHomeTeamName: jsonForApi.match_hometeam_name , 
        matchHometeamScore: jsonForApi.match_hometeam_score == '' ? 0 : jsonForApi.match_hometeam_score, 
        matchAwayteamName: jsonForApi.match_awayteam_name , 
        matchAwayteamScore: jsonForApi.match_awayteam_score == '' ? 0 : jsonForApi.match_awayteam_score, 
        matchLive: jsonForApi.match_live 
    }

    if(jsonForApi.statistics.length > 0){
        jsonForApi.statistics.forEach(function(element) {
            if(element.type == "shots on target"){
                objReturn.shotsOnTargetHome = element.home
                objReturn.shotsOnTargetAway = element.away
            }
            if(element.type == "shots off target"){
                objReturn.shotOffTargetHome = element.home
                objReturn.shotOffTargetAway = element.away
            }
            if(element.type == "possession (%)"){
                objReturn.possessionHome = element.home
                objReturn.possessionAway = element.away
            }
            if(element.type == "corners"){
                objReturn.cornersHome = element.home
                objReturn.possessionAway = element.away
            }
            if(element.type == "offsides"){
                objReturn.offsidesHome = element.home
                objReturn.offsidesAway = element.away
            }
            if(element.type == "fouls"){
                objReturn.foulsHome = element.home
                objReturn.foulsAway = element.away
            }
            if(element.type == "yellow cards"){
                objReturn.yellowCardsHome = element.home
                objReturn.yellowCardsAway = element.away
            }
            if(element.type == "goal kicks"){
                objReturn.goalKicksHome = element.home
                objReturn.goalKicksAway = element.away
            }
            if(element.type == "treatments"){
                objReturn.treatmentsHome = element.home
                objReturn.treatmentsAway = element.away
            }
        })
    }

    return objReturn
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

module.exports = {mappingJsonMatch, asyncForEach}