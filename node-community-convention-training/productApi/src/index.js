'use strict'
postgres://admin:EHSOLOQCPTQPOPCQ@sl-us-dal-9-portal.1.dblayer.com:10073/compose
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('winston')

const config = require('../config')
const router = require('./routes')

console.log(config.dbConnectionString)

const app = new Koa()
app.use(bodyParser())
app.use(router.middleware())

app.listen(config.port, () => {
  logger.info('app is listening:', config.port)
})
