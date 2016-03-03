'use strict'

const Router = require('koa-router')

const request = require('superagent')

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    request.get(url)
      .end((err, res) => {
      if (err) {
        return reject(err)
      }
      resolve(res)
    })
  })
}


const router = new Router()

router.get('/users', function * () {

  const result = yield makeRequest('http://localhost:3202/')
  this.body = {
     message: result
  }
})
router.get('/users/:userId', function * () {
  this.body = {
    message: 'not implemented'
  }
})
router.get('/users/:userId/products', function * () {
  this.body = {
    message: 'not implemented'
  }
})
router.post('/users/:userId/products', function * () {
  this.body = {
    message: 'not implemented'
  }
})

module.exports = router
