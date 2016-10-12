# [koa-better-serve][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Small, simple and correct serving of files, using [koa-send][] - nothing more.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install

```
npm i koa-better-serve --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const koaBetterServe = require('koa-better-serve')
```

### [koaBetterServe](index.js#L38)
> Serving `dir` of files and folders, when request url (`ctx.url`) match to `pathname`. All behind the scenes is just using [koa-send][]. **Hint:** use [koa-convert][] to use it for [koa][] v1.

**Params**

* `<dir>` **{String|Buffer}**: folder to serve    
* `[pathname]` **{String|RegExp}**: path to match, can be regex    
* `[opts]` **{Object}**: optional, passed directly to [koa-send][]    
* `returns` **{Function}**: plugin which returns `Promise` when called  

**Example**

```js
const serve = require('koa-better-serve')
const Koa = require('koa')
const app = new Koa()

app.use(serve('./uploads/images', '/images'))
app.listen(4290)
```

## Related
- [koa-bel](https://www.npmjs.com/package/koa-bel): View engine for `koa` without any deps, built to be used with… [more](https://github.com/tunnckocore/koa-bel#readme) | [homepage](https://github.com/tunnckocore/koa-bel#readme "View engine for `koa` without any deps, built to be used with `bel`. Any other engines that can be written in `.js` files would work, too.")
- [koa-better-body](https://www.npmjs.com/package/koa-better-body): Full-featured [koa][] body parser! Support parsing text, buffer, json, json patch, json… [more](https://github.com/tunnckocore/koa-better-body#readme) | [homepage](https://github.com/tunnckocore/koa-better-body#readme "Full-featured [koa][] body parser! Support parsing text, buffer, json, json patch, json api, csp-report, multipart, form and urlencoded bodies. Works for koa@1, koa@2 and will work for koa@3.")
- [koa-better-ratelimit](https://www.npmjs.com/package/koa-better-ratelimit): Better, smaller, faster - koa middleware for limit request by ip, store… [more](https://github.com/tunnckoCore/koa-better-ratelimit) | [homepage](https://github.com/tunnckoCore/koa-better-ratelimit "Better, smaller, faster - koa middleware for limit request by ip, store in-memory.")
- [koa-ip-filter](https://www.npmjs.com/package/koa-ip-filter): Middleware for [koa][] that filters IPs against glob patterns, RegExp, string or… [more](https://github.com/tunnckocore/koa-ip-filter#readme) | [homepage](https://github.com/tunnckocore/koa-ip-filter#readme "Middleware for [koa][] that filters IPs against glob patterns, RegExp, string or array of globs. Support custom `403 Forbidden` message and custom ID.")
- [nanomatch](https://www.npmjs.com/package/nanomatch): Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch… [more](https://github.com/jonschlinkert/nanomatch) | [homepage](https://github.com/jonschlinkert/nanomatch "Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but complete Bash 4.3 wildcard support only (no support for exglobs, posix brackets or braces)")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/koa-better-serve/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[koa-convert]: https://github.com/gyson/koa-convert
[koa-send]: https://github.com/koajs/send
[koa]: https://github.com/koajs/koa
[micromatch]: https://github.com/jonschlinkert/micromatch
[through2]: https://github.com/rvagg/through2
[use]: https://github.com/jonschlinkert/use
[vinyl]: https://github.com/gulpjs/vinyl

[npmjs-url]: https://www.npmjs.com/package/koa-better-serve
[npmjs-img]: https://img.shields.io/npm/v/koa-better-serve.svg?label=koa-better-serve

[license-url]: https://github.com/tunnckoCore/koa-better-serve/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/koa-better-serve.svg

[downloads-url]: https://www.npmjs.com/package/koa-better-serve
[downloads-img]: https://img.shields.io/npm/dm/koa-better-serve.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/koa-better-serve
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/koa-better-serve.svg

[travis-url]: https://travis-ci.org/tunnckoCore/koa-better-serve
[travis-img]: https://img.shields.io/travis/tunnckoCore/koa-better-serve/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/koa-better-serve
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/koa-better-serve.svg

[david-url]: https://david-dm.org/tunnckoCore/koa-better-serve
[david-img]: https://img.shields.io/david/tunnckoCore/koa-better-serve.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

