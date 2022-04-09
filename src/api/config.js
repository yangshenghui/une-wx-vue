let BASE_URL = '/api'
if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://localhost:5000/'
} else if(process.env.NODE_ENV == 'production'){
  BASE_URL = 'http://unechannel.com:5000/'
}

export { BASE_URL }

