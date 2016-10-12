/*!
 * koa-better-serve <https://github.com/tunnckoCore/koa-better-serve>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var path = require('path')
var send = require('koa-send')
var typeOf = require('kind-of')

/**
 * > Serving `dir` of files and folders, when request
 * url (`ctx.url`) match to `pathname`. All behind
 * the scenes is just using [koa-send][].
 * **Hint:** use [koa-convert][] to use it for [koa][] v1.
 *
 * **Example**
 *
 * ```js
 * const serve = require('koa-better-serve')
 * const Koa = require('koa')
 * const app = new Koa()
 *
 * app.use(serve('./uploads/images', '/images'))
 * app.listen(4290)
 * ```
 *
 * @param  {String|Buffer} `<dir>` folder to serve
 * @param  {String|RegExp} `[pathname]` path to match, can be regex
 * @param  {Object} `[opts]` optional, passed directly to [koa-send][]
 * @return {Function} [koa][] plugin which returns `Promise` when called
 * @api public
 */

module.exports = function koaBetterServe (dir, pathname, opts) {
  dir = typeOf(dir) === 'buffer' ? dir.toString() : dir
  opts = typeOf(pathname) === 'object' ? pathname : opts
  opts = typeOf(opts) === 'object' ? opts : {}
  opts.root = dir
  pathname = typeOf(pathname) === 'object' ? false : pathname
  pathname = pathname || '/'

  if (typeOf(dir) !== 'string') {
    throw new TypeError('koa-send-serve: expect `dir` to be string or buffer')
  }
  if (typeOf(pathname) === 'string') {
    pathname = pathname[0] === '^' ? pathname.slice(1) : pathname
    pathname = pathname[0] === '/' ? pathname : '/' + pathname
    pathname = new RegExp('^' + pathname)
  }
  if (typeOf(pathname) !== 'regexp') {
    throw new TypeError('koa-send-serve: expect `pathname` to be string or regex')
  }

  return function (ctx, next) {
    return pathname.test(ctx.url)
      ? next().then(function () {
        var fp = ctx.path.replace(pathname, '')
        var fpath = path.relative(dir, path.resolve(dir, fp))
        return send(ctx, fpath, opts)
      })
      : next()
  }
}
