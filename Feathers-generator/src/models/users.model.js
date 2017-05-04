// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    username: {type: String, unique: true, required: true },
    email: {type: String, unique: true, required: true},
    password: { type: String, required: true },
    friends:[String],
    routes:[ 
        {routeId:{type: String},walked_date: {type:[Date]}
        }
    ],      
    googleId: { type: String },
  
    facebookId: { type: String },
  
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('users', users);
};
