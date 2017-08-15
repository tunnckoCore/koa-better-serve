/*!
 * koa-better-serve <https://github.com/tunnckoCore/koa-better-serve>
 *
 * Copyright (c) 2017 Charlike Mike Reagent <open.source.charlike@gmail.com> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

const path = require('path')
const test = require('mukla') // eslint-disable-line
const Koa = require('koa')
const request = require('supertest')
const serve = require('./src/index')

const relative = (fp) => path.join(__dirname, fp)

test('1. throw error if `root` not a string', () => {
  function fixture () {
    serve(123)
  }

  test.throws(fixture, /TypeError/)
  test.throws(fixture, /expect `root` to be string/)
})

test('2. throw error if `pathname` not a string or `options` object', () => {
  function fixture () {
    serve('./foo', 123)
  }

  test.throws(fixture, /TypeError/)
  test.throws(fixture, /expect `pathname` to be string/)
})

test('3. accept `options` as second parameter', () => {
  let app = new Koa()
  app.use(
    serve(__dirname, {
      hidden: true,
    })
  )

  return request(app.callback())
    .get('/.travis.yml')
    .expect(/language: node_js/)
    .expect(200)
})

test('4. response 404 when `root` not exists', () => {
  let app = new Koa()
  app.use(serve('./not-exists', '/'))

  return request(app.callback()).get('/LICENSE').expect(404, /Not Found/)
})

test('5. serve file from root when pathname `/pkg/`', () => {
  let server = new Koa()

  // both `/pkg/` and `pkg/` works
  return request(server.use(serve(__dirname, 'pkg/')).callback())
    .get('/pkg/package.json')
    .expect(/name": "koa-better-serve"/)
    .expect(200)
})

test('6. serve package.json from nested root', () => {
  let app = new Koa()
  app.use(serve(relative('node_modules/koa-send')))

  return request(app.callback())
    .get('/package.json')
    .expect(/name": "koa-send"/)
    .expect(200)
})

test('7. serve file when request has prefix', () => {
  let app = new Koa()
  app.use(serve(relative('node_modules/supertest'), '/some/foo/bar'))

  return request(app.callback())
    .get('/some/foo/bar/package.json')
    .expect(/supertest/)
    .expect(200)
})
