'use strict';

module.exports = app => {
  class LoginController extends app.Controller {
    async index() {
      console.log('login query body : ', this.ctx.request.body);
      this.ctx.body = this.ctx.request.body;
    }
  }
  return LoginController;
};
