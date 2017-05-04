const assert = require('assert');
const app = require('../../src/app');

describe('\'palace\' service', () => {
  it('registered the service', () => {
    const service = app.service('palace');

    assert.ok(service, 'Registered the service');
  });
});
