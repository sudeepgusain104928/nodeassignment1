'use strict'
const {EventEmitter} = require('events')
const server = require('./server/server')
const config = require('./configs');
const mediator = new EventEmitter();

server.start({ port: config.serverSettings.port }).then(() => console.log('Server has started'));