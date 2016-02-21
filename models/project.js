// project model
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
  // passportLocalMongoose = require('passport-local-mongoose');


var Project = new Schema({
  name: String, // size
  date: {type : Date, default : Date.now, trim: true},
  accounts:[{ type : Schema.ObjectId, ref: 'Account' }],
  medias: [{
          id: Schema.ObjectId,
          date: {type : Date, default : Date.now},
          filePath: { String, default: '' },
          fileName: String,
          mediaType: String,
          cameraTimecode: String,
          creationTime: Date,
          tapeReelName: String,
          duration: Number,
          codecTimeBaseFps: Number,
          converted: [{
            id: Schema.ObjectId,
            name: String,
            mimeType: String,
            path: String
          }],
          transcript: { type : Schema.ObjectId, ref: 'Transcript' }
        }]
});

// Project.plugin(passportLocalMongoose);

module.exports = mongoose.model('projects', Project);
