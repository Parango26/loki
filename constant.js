module.exports = {
    'dev': {
      'method_get': "GET",
      'url_api_apifootball': "https://apifootball.com/api/",
      'format_date': "YYYY-MM-DD",
      'action_get_events': "get_events",
      'action_get_standings': "get_standings",
      'leaguesIds':['79', '81', '109', '110', '117', '127', '128', '151', '117','62','63' ]

    },
    'test': {
        'method_get': 'GET',
        'url_api_apifootball': "https://apifootball.com/api/",
        'action_get_events': 'get_events',
        'leaguesIds':['79', '81', '109', '110', '117', '127', '128', '151', '117','62','63' ]
      
    },
    'production': {
        'method_get': 'GET',
        'url_api_apifootball': 'https://apifootball.com/api/',
        'action_get_events': 'get_events',
        'leaguesIds':['79', '81', '109', '110', '117', '127', '128', '151', '117','62','63' ]
      
    }
  }[process.env.NODE_ENV || 'dev']