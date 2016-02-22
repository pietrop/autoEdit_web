//transcript model
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
  // passportLocalMongoose = require('passport-local-mongoose');


var Transcript = new Schema({
  name: String,
  description: String,
  paragraph: [{
    id: Schema.ObjectId,
    words: [{
      id: Schema.ObjectId,
      start: Number,
      end: Number,
      text: String
    }],
    speakers: [{ type : Schema.ObjectId, ref: 'speakers' }]
  }]
});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('transcripts', Transcript);
