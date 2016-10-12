/*!
 * koa-better-serve <https://github.com/tunnckoCore/koa-better-serve>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var Koa = require('koa')
var test = require('mukla')
var serve = require('./index')
var request = require('supertest')

test('should throw TypeError if `dir` not a string or buffer', function (done) {
  function fixture () {
    serve(123)
  }
  test.throws(fixture, /TypeError/)
  test.throws(fixture, /expect `dir` to be string or buffer/)
  done()
})

test('should throw TypeError if `pathname` not a string or regexp', function (done) {
  function fixture () {
    serve('./foobar', 123)
  }
  test.throws(fixture, /TypeError/)
  test.throws(fixture, /expect `pathname` to be string or regex/)
  done()
})

test('should be able to accept buffer as `dir`', function (done) {
  var app = new Koa()
  app.use(serve(new Buffer('./'), '/'))

  request(app.callback())
    .get('/LICENSE')
    .expect(200, /Charlike Mike Reagent/)
    .expect(/MIT/)
    .end(done)
})

test('should be able to pass `opts` as 2nd argument', function (done) {
  var app = new Koa()
  app.use(serve('./', {
    hidden: true
  }))

  request(app.callback())
    .get('/.travis.yml')
    .expect(/language: node_js/)
    .expect(200, done)
})

test('should try to serve LICENSE file from not existing dir', function (done) {
  var app = new Koa()
  app.use(serve('./not-exists', '/'))

  request(app.callback())
    .get('/LICENSE')
    .expect(404, /Not Found/)
    .end(done)
})

test('should serve `package.json` from repo root when `/pkg/package.json` url', function (done) {
  var server = new Koa()
  // both `/pkg/` and `pkg/` works
  request(server.use(serve('./', 'pkg/')).callback())
    .get('/pkg/package.json')
    .expect(/koa-better-serve/)
    .expect(200, done)
})

test('should serve `koa-send`s package.json when `/package.json` request', function (done) {
  var app = new Koa()
  app.use(serve('./node_modules/koa-send', '/'))

  request(app.callback())
    .get('/package.json')
    .expect(/koa-send/)
    .expect(200, done)
})
