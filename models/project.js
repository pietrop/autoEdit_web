// project model
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
  // passportLocalMongoose = require('passport-local-mongoose');


var Project = new Schema({
  name: String, // size
  date: {type : Date, default : Date.now, trim: true}
});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('projects', Project);
