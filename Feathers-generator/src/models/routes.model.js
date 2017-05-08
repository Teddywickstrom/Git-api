// routes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
    var GeoJSON = require('mongoose-geojson-schema');
    var mongoose = require('mongoose');
  const routes = new mongoose.Schema({
     name:{
        type: String,
        required: true
    },
    creatorId:{
        type: String,
        required: true
    },
    walkersId:[ 
        {userId:{type: mongooseClient.Schema.Types.ObjectId,
         ref: 'users'}}],
      
    coords: [[mongoose.Schema.Types.Point]],
      
    time:String,
    score:[{
        userId:{type: mongooseClient.Schema.Types.ObjectId,
         ref: 'users'},
        score:{type: Number}
        }],

    comments:[{
        userId:{type: mongooseClient.Schema.Types.ObjectId,
         ref: 'users'},
        comment:{type: String},
        date:{type:Date}
        }],
    checkpoints:[ 
        {checkpointsId:{type: mongooseClient.Schema.Types.ObjectId,
         ref: 'checkpoints'}}
        ],
    distance:{
        type: Number
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('routes', routes);
};
