// checkpoints-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const checkpoints = new mongooseClient.Schema({
    name: {type: String, unique: true, required: true },
    latitude:Number,
    longitude:Number,
    type: {type: String, required: true}
    }
  );

  return mongooseClient.model('checkpoints', checkpoints);
};
