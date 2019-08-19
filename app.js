'use strict';

const assert = require('assert');
const MIDDLEWARE_NAME_XSS = 'xss';

module.exports = app => {
  const { config } = app;
  console.log('config : ', config.appMiddleware);
  const index = config.appMiddleware.indexOf(MIDDLEWARE_NAME_XSS);

  assert.equal(
    index,
    -1,
    `Duplication of middleware name found: ${MIDDLEWARE_NAME_XSS}. Rename your middleware other than "${MIDDLEWARE_NAME_XSS}" please.`
  );

  config.appMiddleware.unshift(MIDDLEWARE_NAME_XSS);
};
