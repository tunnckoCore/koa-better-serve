/*!
 * koa-better-serve <https://github.com/tunnckoCore/koa-better-serve>
 *
 * Copyright (c) 2017 Charlike Mike Reagent <open.source.charlike@gmail.com> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

import send from 'koa-send'
import kindOf from 'kind-of'

/**
 * Serving `dir` of files and folders, when request
 * url (`ctx.url`) match to `pathname`. All behind
 * the scenes is just using [koa-send][].
 * **Hint:** use [koa-convert][] to use it for [koa][] v1.
 *
 * @example
 * const serve = require('koa-better-serve')
 * const Koa = require('koa')
 * const app = new Koa()
 *
 * app.use(serve('./uploads/images', '/images'))
 * app.listen(4290)
 *
 * @param  {String|Buffer} root folder to serve
 * @param  {String|RegExp} pathname path to match, can be regex
 * @param  {Object} options optional, passed directly to [koa-send][]
 * @return {Function} a [koa][] plugin which returns `Promise` when called
 * @name   koaBetterServe
 * @public
 */
export default function koaBetterServe (root, pathname, options) {
  if (kindOf(root) !== 'string') {
    throw new TypeError('koa-better-serve: expect `root` to be string')
  }

  if (kindOf(pathname) === 'object') {
    options = pathname
    pathname = '/'
  }

  options = kindOf(options) === 'object' ? options : null
  options = Object.assign({ root }, options)
  pathname = pathname || '/'

  if (kindOf(pathname) !== 'string') {
    throw new TypeError('koa-better-serve: expect `pathname` to be string')
  }

  return (ctx, next) => {
    if (ctx.path.indexOf(pathname) < 0) {
      // if route not match, goto next middleware
      // so this middleware can be initialized at any time instead of at the last.
      next();
      return;
    }
    const filepath = ctx.path.replace(pathname, '')

    return send(ctx, filepath, options).catch((er) => {
      /* istanbul ignore else */
      if (er.code === 'ENOENT' && er.status === 404) {
        ctx.status = 404
        ctx.body = 'Not Found'
      }
    })
  }
}
