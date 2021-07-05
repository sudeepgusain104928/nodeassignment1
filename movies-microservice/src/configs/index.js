const dbSettings = {

  }
  
  const serverSettings = {
    port: process.env.PORT || 3010,
  }
  
  module.exports = Object.assign({}, { dbSettings, serverSettings })