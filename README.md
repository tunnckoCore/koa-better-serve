# koa-better-serve [![npm version][npmv-img]][npmv-url] [![github release][github-release-img]][github-release-url] [![mit License][license-img]][license-url] [![NPM Downloads Weekly][downloads-weekly-img]][downloads-weekly-url] [![NPM Downloads Total][downloads-total-img]][downloads-total-url] 

> Small, simple and correct serving of files, using [koa-send][] - nothing more

You might also be interested in [koa-better-router](https://github.com/tunnckocore/koa-better-router#readme).

## Quality Assurance :100:

[![Code Climate][codeclimate-img]][codeclimate-url] 
[![Code Style Standard][standard-img]][standard-url] 
[![Linux Build][travis-img]][travis-url] 
[![windows Build][appveyor-img]][appveyor-url] 
[![Code Coverage][codecov-img]][codecov-url] 
[![Dependencies Status][dependencies-img]][dependencies-url] 
[![Renovate App Status][renovate-img]][renovate-url] 

If you have any _how-to_ kind of questions, please read [Code of Conduct](./CODE_OF_CONDUCT.md) and **join the chat** room or [open an issue][open-issue-url].  
You may also read the [Contributing Guide](./CONTRIBUTING.md). There, beside _"How to contribute?"_, we describe everything **_stated_** by  the badges.

[![tunnckoCore support][gitterchat-img]][gitterchat-url] 
[![Code Format Prettier][prettier-img]][prettier-url] 
[![node security status][nodesecurity-img]][nodesecurity-url] 
[![conventional Commits][ccommits-img]][ccommits-url] 
[![semantic release][semantic-release-img]][semantic-release-url] 
[![Node Version Required][nodeversion-img]][nodeversion-url]

## Install

This project requires [Node.js][nodeversion-url] v7 and above. Use [npm](https://www.npmjs.com) to install it.

```
$ npm install koa-better-serve
```

## API
Review carefully the provided examples and the working [tests](./test.js).

### [koaBetterServe](index.js#L32)

Serving `dir` of files and folders, when request
url (`ctx.url`) match to `pathname`. All behind
the scenes is just using [koa-send][].
**Hint:** use [koa-convert][] to use it for [koa][] v1.

**Params**

* `root` **{String|Buffer}**: folder to serve    
* `pathname` **{String|RegExp}**: path to match, can be regex    
* `options` **{Object}**: optional, passed directly to [koa-send][]    
* `returns` **{Function}**  

**Example**

```jsx
const serve = require('koa-better-serve')
const Koa = require('koa')
const app = new Koa()

app.use(serve('./uploads/images', '/images'))
app.listen(4290)
```

## Related
- [dush](https://www.npmjs.com/package/dush): Microscopic & functional event emitter in ~350 bytes, extensible through plugins | [homepage](https://github.com/tunnckocore/dush#readme "Microscopic & functional event emitter in ~350 bytes, extensible through plugins")
- [koa-bel](https://www.npmjs.com/package/koa-bel): View engine for `koa` without any deps, built to be used with… [more](https://github.com/tunnckocore/koa-bel#readme) | [homepage](https://github.com/tunnckocore/koa-bel#readme "View engine for `koa` without any deps, built to be used with `bel`. Any other engines that can be written in `.js` files would work, too.")
- [koa-better-body](https://www.npmjs.com/package/koa-better-body): Full-featured [koa][] body parser! Support parsing text, buffer, json, json patch, json… [more](https://github.com/tunnckoCore/koa-better-body#readme) | [homepage](https://github.com/tunnckoCore/koa-better-body#readme "Full-featured [koa][] body parser! Support parsing text, buffer, json, json patch, json api, csp-report, multipart, form and urlencoded bodies. Works for koa@1, koa@2 and will work for koa@3.")
- [koa-better-router](https://www.npmjs.com/package/koa-better-router): Stable and lovely router for [koa][], using [path-match][]. Foundation for building powerful… [more](https://github.com/tunnckocore/koa-better-router#readme) | [homepage](https://github.com/tunnckocore/koa-better-router#readme "Stable and lovely router for [koa][], using [path-match][]. Foundation for building powerful, flexible and RESTful APIs easily.")
- [koa-rest-router](https://www.npmjs.com/package/koa-rest-router): Most powerful, flexible and composable router for building enterprise RESTful APIs easily! | [homepage](https://github.com/tunnckocore/koa-rest-router#readme "Most powerful, flexible and composable router for building enterprise RESTful APIs easily!")
- [micro](https://www.npmjs.com/package/micro): Asynchronous HTTP microservices | [homepage](https://github.com/zeit/micro#readme "Asynchronous HTTP microservices")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][open-issue-url].  
Please read the [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) documents for advices.  

## Author
- [github/tunnckoCore](https://github.com/tunnckoCore)
- [twitter/tunnckoCore](https://twitter.com/tunnckoCore)
- [codementor/tunnckoCore](https://codementor.io/tunnckoCore)

## License
Copyright © 2016-2017, [Charlike Mike Reagent](https://i.am.charlike.online). Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on August 08, 2017._  
Project scaffolded using [charlike-cli][].

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[browserify]: https://github.com/substack/node-browserify
[charlike-cli]: https://github.com/tunnckoCore/charlike-cli
[charlike]: https://github.com/tunnckoCore/charlike
[commitizen]: https://github.com/commitizen/cz-cli
[dezalgo]: https://github.com/npm/dezalgo
[dush-better-use]: https://github.com/tunnckocore/dush-better-use
[dush-methods]: https://github.com/tunnckocore/dush-methods
[dush-no-chaining]: https://github.com/tunnckocore/dush-no-chaining
[dush-options]: https://github.com/tunnckocore/dush-options
[dush-promise]: https://github.com/tunnckocore/dush-promise
[dush-router]: https://github.com/tunnckocore/dush-router
[dush-tap-report]: https://github.com/tunnckocore/dush-tap-report
[hyperscript]: https://github.com/dominictarr/hyperscript
[koa-convert]: https://github.com/gyson/koa-convert
[koa-send]: https://github.com/koajs/send
[koa]: https://github.com/koajs/koa
[mitt]: https://github.com/developit/mitt
[once]: https://github.com/isaacs/once
[path-match]: https://github.com/pillarjs/path-match
[rollup]: https://github.com/rollup/rollup
[standard-version]: https://github.com/conventional-changelog/standard-version
[verb-generate-readme]: https://github.com/verbose/verb-generate-readme
[verb]: https://github.com/verbose/verb
[webpack]: https://github.com/webpack/webpack

<!-- Heading badges -->
[npmv-url]: https://www.npmjs.com/package/koa-better-serve
[npmv-img]: https://img.shields.io/npm/v/koa-better-serve.svg

[open-issue-url]: https://github.com/tunnckoCore/koa-better-serve/issues/new
[github-release-url]: https://github.com/tunnckoCore/koa-better-serve/releases/latest
[github-release-img]: https://img.shields.io/github/release/tunnckoCore/koa-better-serve.svg

[license-url]: https://github.com/tunnckoCore/koa-better-serve/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/koa-better-serve.svg

[downloads-weekly-url]: https://www.npmjs.com/package/koa-better-serve
[downloads-weekly-img]: https://img.shields.io/npm/dw/koa-better-serve.svg

[downloads-total-url]: https://www.npmjs.com/package/koa-better-serve
[downloads-total-img]: https://img.shields.io/npm/dt/koa-better-serve.svg

<!-- Front line badges -->
[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/koa-better-serve
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/koa-better-serve.svg

[standard-url]: https://github.com/standard/standard
[standard-img]: https://img.shields.io/badge/code_style-standard-brightgreen.svg

[travis-url]: https://travis-ci.org/tunnckoCore/koa-better-serve
[travis-img]: https://img.shields.io/travis/tunnckoCore/koa-better-serve/master.svg?label=linux

[appveyor-url]: https://ci.appveyor.com/project/tunnckoCore/koa-better-serve
[appveyor-img]: https://img.shields.io/appveyor/ci/tunnckoCore/koa-better-serve/master.svg?label=windows

[codecov-url]: https://codecov.io/gh/tunnckoCore/koa-better-serve
[codecov-img]: https://img.shields.io/codecov/c/github/tunnckoCore/koa-better-serve/master.svg

[dependencies-url]: https://david-dm.org/tunnckoCore/koa-better-serve
[dependencies-img]: https://img.shields.io/david/tunnckoCore/koa-better-serve.svg

[renovate-url]: https://renovateapp.com
[renovate-img]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg

<!-- Second front of badges -->

[gitterchat-url]: https://gitter.im/tunnckoCore/support
[gitterchat-img]: https://img.shields.io/gitter/room/tunnckoCore/support.svg

[prettier-url]: https://github.com/prettier/prettier
[prettier-img]: https://img.shields.io/badge/styled_with-prettier-f952a5.svg

[nodesecurity-url]: https://nodesecurity.io/orgs/tunnckocore-dev/projects/344b8ad6-4e7d-4579-bb70-60fa09e49044
[nodesecurity-img]: https://nodesecurity.io/orgs/tunnckocore-dev/projects/344b8ad6-4e7d-4579-bb70-60fa09e49044/badge
<!-- the original color of nsp: 
[nodesec-img]: https://img.shields.io/badge/nsp-no_known_vulns-35a9e0.svg -->

[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[ccommits-url]: https://conventionalcommits.org/
[ccommits-img]: https://img.shields.io/badge/conventional_commits-1.0.0-yellow.svg

[nodeversion-url]: https://nodejs.org/en/download
[nodeversion-img]: https://img.shields.io/node/v/koa-better-serve.svg

