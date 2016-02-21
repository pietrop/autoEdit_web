var express = require('express');
var multer = require('multer');
var Unzipper = require('decompress-zip');
var fs = require('fs');
var fsExtra = require('fs-extra');
var path = require('path');
var serveStatic = require('serve-static');
var async = require('async');
var url = require('url');

var router = express.Router();


Project = require('../models/project.js');

var uploading = multer({
  dest: './uploads/'
});

var decompressed = false;
var extractPath = "./projects/";

moved = false;
filePath = null;
dirPath = null;

/* GET upload page. */
router.get('/upload_video', isLoggedIn, function(req, res, next) {
  res.render('upload_video', { title: 'Auto Edit Desktop' });
});

router.get('/upload_video_srt', isLoggedIn, function(req, res, next) {
  res.render('upload_video_srt', { title: 'Auto Edit Desktop' });
});


// ======================  upload/POST file and GET uploaded files page. ===============================
router.post('/uploaded', isLoggedIn, uploading.single('videoFile'), function(req, res, next) {

  // add error handler

  console.log('File original name: ' + req.file.originalname);
  console.log('File temporary name: ' + req.file.filename);
  console.log('Project name: ' + req.body.projectTitle);

// TODO:
//      - get video file path
//      - split audio (pass it to to_audio)
//      - move audio file into ./projects/...
//      - if mimetype video make mp4, ogv (NO mp4 on NWJS)
//      - if mimetype audio  make ogg, mp3



  async.series([

    function first(callback){
      createFolder('./projects/' + req.body.projectTitle);
      callback(null, 'one');
    },

    function second(callback){
      renameUploaded('./uploads/' + req.file.filename, './uploads/' + req.file.originalname);
      callback(null, 'two');
    },

    function third(callback){
      // TO DO: add to_audio function
      moveFile('./uploads/' + req.file.originalname, './projects/' + req.body.projectTitle + '/' + req.file.originalname);
      callback(null, 'three');
    },

    function fourth(callback){
      filePath = getFiles('./projects/' + req.body.projectTitle);
      dirPath = './projects/' + req.body.projectTitle; //needed for delete and db insert

      if (req.file.mimetype === 'application/zip') {

        console.log("File original name: " + req.file.originalname);

        unzipFolder(req.file.originalname, req.body.projectTitle);

        res.render('uploaded_project', {
          title: 'Auto Edit - File Uploaded',
          fileUploaded: filePath,
          project: req.body.projectTitle,
          size: convertInKB(req.file.size),
          mimetype: detectMimetype(req.file.mimetype)
        });

      } else {

        res.render('uploaded_project', {
         title: 'Auto Edit - File Uploaded',
         fileUploaded: filePath,
         project:req.body.projectTitle,
         size: convertInKB(req.file.size),
         mimetype: detectMimetype(req.file.mimetype)
       });

      }
      callback(null, 'four');
    },

    function fifth(callback){

      var project = new Project({
        name: req.body.projectTitle,
        folder_path: dirPath
      });


      project.save(function(err, project){
        if(err){
          return next(err);
        }
        });

      callback(null, 'five');
    }

    ]);

console.log("File path: " + filePath);
console.log("File extension: " + req.file.mimetype);

});
//  ================   END POST UPLOADED ==================


//  ================   DELETE DIRECTORY ==================
router.post('/delete', isLoggedIn, function(req, res, next){

  console.log("Directory path: " +  dirPath);

  deleteDirectory(dirPath);

  res.render('deleted_msg', {
   title: 'Auto Edit - Project Deleted',
   fileUploaded: filePath
 });
});
//  ================   END POST DELETE DIRECTORY ==================


// ================   DELETE PROJECT ==================
router.post('/delete/:id', isLoggedIn, function(req, res, next){

  console.log(req.params.id);

  _id =  req.params.id;

  Project.findById(_id, function(err, project){
    if(err)
    {
      next(err);
    }

    else{
      deleteDirectory(project.folder_path);

      filePath = project.name;

      project.remove(function(err, proj){
        if(err) console.log(err);

        res.format({
          html: function(){
           res.render('deleted_unit', {
             title: 'Auto Edit - Project Deleted',
             fileUploaded: filePath
           });
         },
         json: function(){
           res.json({message : 'deleted',
            item : proj
          });
         }
       });
      });
    }
  });
});
//  ================   END POST DELETE PROJECT ==================

//  ================   UTILITY ==================
function createFolder(dir){
  if(fs.existsSync(dir)){
    console.log("Directory already there");
  }else{
    fs.mkdir(dir, function(err){
      if(err){
        console.log(err);
      }else{
        console.log("Directory created");
      }
    });
  }
}

// MOVE FILES
function moveFile(origin, dest){
  fs.rename(origin, dest, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("File moved");
    }
  });
}

// DELETE DIRECTORY
function deleteDirectory(dir){
  fsExtra.removeSync(dir);
}

// GET FILES
function getFiles (dir, files_){
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files){
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()){
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

// RENAME FILE
function renameUploaded(origin, dest) {
  fs.rename(origin, dest, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("File renamed");
    }
  });
}

function convertInKB(size) {
  return size / 1000 + "KB";
}

function unzipFolder(file, videoName) {
  console.log('YO: ' + file.fieldname + ' uploaded to  ' + file.path);

  var unzip = new Unzipper(String(filePath));

  unzip.on("extract", function(log) {
    console.log();
    console.log("Finished extracting");
    console.log();
  });

  unzip.on("error", function(err) {
    console.log("Error" + err);
  });

  decompressed = decomp(unzip, videoName);
}

function decomp(unzip, videoName) {
  unzip.extract({
    path: extractPath + '/' + videoName
  });
  return true;
}

function detectMimetype(file) {
  switch (file) {
    case 'text/html':
    return 'html';
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    return 'docx';
    case 'text/javascript':
    return 'js';
    case 'text/css':
    return 'css';
    case 'image/png':
    return 'png';
    case 'image/jpeg':
    return 'jpeg';
    case 'application/pdf':
    return 'pdf';
    case 'application/zip':
    return 'zip';
    case 'text/markdown':
    return 'md';
  }
}
//  ================   END UTILITY ==================

// *************  TODO: share the middleware in the app! ****************

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}

module.exports = router;
