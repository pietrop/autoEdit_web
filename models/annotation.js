//transcript model
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
  // passportLocalMongoose = require('passport-local-mongoose');


var Annotation = new Schema({
  comment: String,
  tags: [{
    id: Schema.ObjectId,
    name: String,
    description: String
  }]
  transcriptions: { type : Schema.ObjectId, ref: 'Transcription' }
});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('annotations', Annotation);
