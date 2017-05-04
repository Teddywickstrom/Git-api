const users = require('./users/users.service.js');
const routes = require('./routes/routes.service.js');
const cities = require('./cities/cities.service.js');
const palace = require('./palace/palace.service.js');
const checkpoints = require('./checkpoints/checkpoints.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(routes);
  app.configure(cities);
  app.configure(palace);
  app.configure(checkpoints);
};
