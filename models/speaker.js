//speaker model
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
  // passportLocalMongoose = require('passport-local-mongoose');


var Speaker = new Schema({
  name: String,
  description: String
});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('speakers', Speaker);
