'use strict';

const mm = require('egg-mock');
// const assert = require('assert');

describe('test/xss.test.js', () => {
  let app;

  afterEach(mm.restore);

  [ 'xss' ].forEach(name => {
    describe(name, () => {
      before(async () => {
        app = mm.app({
          baseDir: `apps/${name}`,
          plugin: true,
          cache: false,
        });
        await app.ready();
      });

      after(() => app.close());


      it('should be ok ! ', async () => {
        await app
          .httpRequest()
          .get('/test?query=<alert>test</alert>')
          .expect(200)
          .expect('{"query":"&lt;alert&gt;test&lt;/alert&gt;"}');
      });

      it('should be ok ! ', async () => {
        await app
          .httpRequest()
          .post('/login')
          .send({
            foo: '<html>bar</html>>',
          })
          .expect(200)
          .expect('{"foo":"&lt;html&gt;bar&lt;/html&gt;>"}');
      });

    });
  });
});
