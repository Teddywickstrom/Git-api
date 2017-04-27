// Initializes the `palace` service on path `/api/places`
const createService = require('feathers-mongoose');
const createModel = require('../../models/palace.model');
const hooks = require('./palace.hooks');
const filters = require('./palace.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'palace',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/places', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/places');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
