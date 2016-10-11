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
    serve('./dir', 123)
  }
  test.throws(fixture, /TypeError/)
  test.throws(fixture, /expect `pathname` to be string or regex/)
  done()
})

test('should serve LICENSE file from repo root', function (done) {
  var app = new Koa()
  app.use(serve('./dir', '/'))

  request(app.callback())
    .get('/LICENSE')
    .expect(200, done)
})
