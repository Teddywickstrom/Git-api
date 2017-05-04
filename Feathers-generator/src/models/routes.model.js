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
    creatorId:{
        type: String,
        required: true
    },
    walkersId:[String],
      
    coords: [[Number]],
      
    time:String,
    score:[{
        userId:{type: String},
        score:{type: Number}
        }],

    comments:[{
        userId:{type: String},
        comment:{type: String},
        date:{type:Date}
        }],
    checkpoints:[String],
    distance:{
        type: Number
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('routes', routes);
};
