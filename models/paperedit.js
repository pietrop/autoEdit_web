//paperedit model
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
  // passportLocalMongoose = require('passport-local-mongoose');


var Paperedit = new Schema({
  name: String,
  description: String,
  sections: [{
    id: Schema.ObjectId,
    title: String,
    description: String,
    duration: Number,
    order: Number,
    papercuts: [{ type : Schema.ObjectId, ref: 'Papercut' }]
  }]

});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('paperedits', Paperedit);
