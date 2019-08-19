'use strict';

module.exports = app => {
  app.get('/test', app.controller.test.index);
  app.post('/login', app.controller.login.index);
};
