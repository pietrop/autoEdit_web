/**
* Video editing utilities.
*/


// var ffmpeg = spawn(Path.join(__dirname, 'videogrep_standalone/ffmpeg'), ['-y', '-i', path, '-acodec', 'pcm_s16le', '-ac', '1', '-ar', '16000', new_name]);
var ffmpeg = require('fluent-ffmpeg');
//TODO: set ffmpeg path, global var.
// Ffmpeg.setFfmpegPath(path) 

function to_audio(src,dest, callback){
	var filenameAr = src.split('/');
	var filename = filenameAr[filenameAr.length -1];
	var outputName = filename +".wav";

	 ffmpeg(src)
	 			.output(outputName)
	 			.inputOptions(['-y', '-i', 
	 				dest,
	 				'-acodec', 'pcm_s16le', 
	 				'-ac', '1', 
	 				'-ar', '16000',
					outputName
	 			])
	 			.on('end', callback || function() {
	   				 console.log('Finished processing');
	 			 })
	  			.run();
}


module.exports = {
		to_audio : function(src,dest, callback){
		return to_audio(src,callback);
	}//,
};
