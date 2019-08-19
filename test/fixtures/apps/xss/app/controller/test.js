'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    async index() {
      console.log('test query body : ', this.ctx.query);
      this.ctx.body = this.ctx.query;
    }
  }
  return TestController;
};
