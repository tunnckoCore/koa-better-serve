/*!
 * koa-better-serve <https://github.com/tunnckoCore/koa-better-serve>
 *
 * Copyright (c) 2016-2017 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

const Koa = require('koa')
const test = require('mukla')
const request = require('supertest')
const serve = require('./index')

test('throw error if `root` not a string', () => {
  function fixture () {
    serve(123)
  }

  test.throws(fixture, /TypeError/)
  test.throws(fixture, /expect `root` to be string/)
})

test('throw error if `pathname` not a string or `options` object', () => {
  function fixture () {
    serve('./foo', 123)
  }

  test.throws(fixture, /TypeError/)
  test.throws(fixture, /expect `pathname` to be string/)
})

test('accept `options` as second parameter', () => {
  let app = new Koa()
  app.use(
    serve('./', {
      hidden: true,
    })
  )

  return request(app.callback())
    .get('/.travis.yml')
    .expect(/language: node_js/)
    .expect(200)
})

test('response 404 when `root` not exists', () => {
  let app = new Koa()
  app.use(serve('./not-exists', '/'))

  return request(app.callback()).get('/LICENSE').expect(404, /Not Found/)
})

test('serve file from root when pathname `/pkg/`', () => {
  let server = new Koa()

  // both `/pkg/` and `pkg/` works
  return request(server.use(serve('./', 'pkg/')).callback())
    .get('/pkg/package.json')
    .expect(/name": "koa-better-serve"/)
    .expect(200)
})

test('serve package.json from nested root', () => {
  let app = new Koa()
  app.use(serve('./node_modules/koa-send'))

  return request(app.callback())
    .get('/package.json')
    .expect(/name": "koa-send"/)
    .expect(200)
})

test('serve file when request has prefix', () => {
  let app = new Koa()
  app.use(serve('./node_modules/supertest', '/some/foo/bar'))

  return request(app.callback())
    .get('/some/foo/bar/package.json')
    .expect(/supertest/)
    .expect(200)
})
