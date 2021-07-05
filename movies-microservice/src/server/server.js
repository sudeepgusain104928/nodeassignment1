'use strict'

const express = require('express');

const start = (options) => {
  return new Promise((resolve, reject) => {

    const app = express()
    
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err))
      res.status(500).send('Something went wrong!')
    })

    api(app, options)

    const server = app.listen(options.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, {start})
