//annotation model
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
  }],
  wordsSelectionIds: [Number],  // wouldn't be correct [] ?
  transcriptions: { type : Schema.ObjectId, ref: 'transcripts' }
});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('annotations', Annotation);
