/**
* Video editing utilities.
*/

var ffmpeg = require('fluent-ffmpeg');
// TODO: set ffmpeg path, global var.
// https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#setting-binary-paths-manually
// Ffmpeg.setFfmpegPath(path);

function to_audio(src,dest, callback){
	var filenameAr = src.split('/');
	var filename = filenameAr[filenameAr.length -1];
	var outputName = filename +".wav";

	ffmpeg(src).output(outputName)
	 			.audioCodec('pcm_s16le')
	 			.audioChannels(1)
	 			.audioBitrate('16000k')
	 			.inputOptions(['-y']) //overwrights destination file
	 			.on('end', callback || function() {
	   				 console.log('Finished processing');
	 			 })
	  			.run();
}


module.exports = {
		to_audio : function(src,dest, callback){
		return to_audio(src,dest,callback);
	}
};
