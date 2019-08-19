# egg-xss

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
![npm](https://img.shields.io/npm/dw/egg-xss)

[npm-image]: https://img.shields.io/npm/v/egg-xss.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/egg-xss
[travis-image]: https://img.shields.io/travis/deepexi/egg-xss.svg?style=flat-square
[travis-url]: https://travis-ci.org/deepexi/egg-xss
[codecov-image]: https://img.shields.io/codecov/c/gh/deepexi/egg-xss.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/deepexi/egg-xss
[download-image]: https://img.shields.io/npm/dw/egg-xss
[download-url]: https://www.npmjs.com/package/egg-xss



Egg's XSS

## Install

```bash
$ npm i egg-xss --save
```


## Usage

```js
// {app_root}/config/plugin.js
exports.jwt = {
  enable: true,
  package: "egg-xss"
};
```

## Configuration

```js
// {app_root}/config/config.default.js
'use strict';
 config.xss = {
    enable: true,
    match: [ '/test', '/login' ],
  };
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```javascript
// app/router.js
"use strict";

module.exports = app => {
  app.get('/test',app.controller.test.index);
};
```

```js
// app/controller/test.js
("use strict");

module.exports = app => {
  class SuccessController extends app.Controller {
    index() {
         console.log('query body : ', this.ctx.query);
         this.ctx.body = this.ctx.query;
    }
  }
  return SuccessController;
};
```


## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
