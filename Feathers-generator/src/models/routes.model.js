// routes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const routes = new mongooseClient.Schema({
     name:{
        type: String,
        required: true
    },
    userId:{
        type: String
    },
    description:{
        type: String
    },
    distance:{
        type: Number
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('routes', routes);
};
