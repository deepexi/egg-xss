'use strict';

const xss = require('node-xss').clean;
module.exports = options => {
  return async function valid(ctx, next) {
    if (options.enable) {
      const body = ctx.request.body;
      const query = ctx.query;
      console.log(body);
      console.log(xss(body));
      console.log(query);
      console.log(xss(query));
      ctx.request.body = xss(body);
      ctx.query = xss(query);
    }

    await next();
  };
};
