/*!
 * koa-better-serve <https://github.com/tunnckoCore/koa-better-serve>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var serve = require('./index')

test('foo bar', function (done) {
  function fixture () {
    serve()
  }
  test.throws(fixture, /TypeError/)
  done()
})
