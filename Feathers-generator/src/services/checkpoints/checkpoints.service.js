// Initializes the `checkpoints` service on path `/api/checkpoints`
const createService = require('feathers-mongoose');
const createModel = require('../../models/checkpoints.model');
const hooks = require('./checkpoints.hooks');
const filters = require('./checkpoints.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'checkpoints',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/api/checkpoints', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/checkpoints');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
