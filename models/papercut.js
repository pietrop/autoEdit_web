//papercut model
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
  // passportLocalMongoose = require('passport-local-mongoose');


var Papercut = new Schema({
  label: String,
  order: Number,
  wordsSelectionIds: [Number],
  transcriptions: { type : Schema.ObjectId, ref: 'transcripts' }
});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('papercuts', Papercut);
