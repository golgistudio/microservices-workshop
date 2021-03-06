'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('winston')

const config = require('../config')
const router = require('./routes')

const app = new Koa()

app.use(bodyParser())

console.log(config.mongodbUri)

app.use(router.middleware())
app.listen(config.port, function () {
  logger.info('app is listening on', config.port)
})
