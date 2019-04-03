module.exports = {
  'dev': {
    'name_db': 'lokidb',
    'dialect': 'mysql',
    'connection_limit': 100,
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'lokidb',
    
    'token_api_apifootball': "55d2d6721908bd36320cbade7eba6e27b30e46edc2a6fba597ffbf0d5e95d6e4"
  },
  'test': {
    'name_db': 'lokidb',
    'dialect': 'mysql',
    'connection_limit': 100,
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'lokidb',
    
    'token_api_apifootball': '55d2d6721908bd36320cbade7eba6e27b30e46edc2a6fba597ffbf0d5e95d6e4'
  },
  'production': {
    'name_db': 'lokidb',
    'dialect': 'mysql',
    'connection_limit': 100,
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'lokidb',
    
    'token_api_apifootball': '55d2d6721908bd36320cbade7eba6e27b30e46edc2a6fba597ffbf0d5e95d6e4'
  }
}[process.env.NODE_ENV || 'dev']