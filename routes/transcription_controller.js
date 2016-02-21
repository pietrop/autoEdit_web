var express = require('express');
var router = express.Router();

Transcript = require('../models/transcript.js');

// ================== get all the transcriptions ==================
router.get('/transcriptions', isLoggedIn, function(req, res, next) {
  // res.format({
  //
  //   html: function(){
  //     res.render('list_annotations',{
  //       title: 'Auto Edit - List Annotations',
  //       annotation: annotations
  //     });
  //   },
  //   json: function(){
  //     res.json({
  //       message : 'deleted',
  //       item : annotations
  //     });
  //   }
  //
  // });
});
// ================== end get all the transcriptions ==================

// ================== create a transcription ==================
router.post('/transcriptions', isLoggedIn, function(req, res, next) {
  // res.format({
  //
  //   html: function(){
  //     res.render('list_annotations',{
  //       title: 'Auto Edit - List Annotations',
  //       annotation: annotations
  //     });
  //   },
  //   json: function(){
  //     res.json({
  //       message : 'deleted',
  //       item : annotations
  //     });
  //   }
  //
  // });
});
// ================== end create a transcription ==================


// ================== get a single transcription ==================
router.get('/transcriptions/:id', isLoggedIn, function(req, res, next) {
  // res.format({
  //
  //   html: function(){
  //     res.render('list_annotations',{
  //       title: 'Auto Edit - List Annotations',
  //       annotation: annotations
  //     });
  //   },
  //   json: function(){
  //     res.json({
  //       message : 'deleted',
  //       item : annotations
  //     });
  //   }
  //
  // });
});
// ================== end get a single transcription ==================


// ==================  update a single transcription ==================
router.put('/transcriptions/:id', isLoggedIn, function(req, res, next) {
  // res.format({
  //
  //   html: function(){
  //     res.render('list_annotations',{
  //       title: 'Auto Edit - List Annotations',
  //       annotation: annotations
  //     });
  //   },
  //   json: function(){
  //     res.json({
  //       message : 'deleted',
  //       item : annotations
  //     });
  //   }
  //
  // });
});
// ==================  end update a single transcription ==================


// ==================   delete a single transcription ==================
router.delete('/transcriptions/:id', isLoggedIn, function(req, res, next) {
  // res.format({
  //
  //   html: function(){
  //     res.render('list_annotations',{
  //       title: 'Auto Edit - List Annotations',
  //       annotation: annotations
  //     });
  //   },
  //   json: function(){
  //     res.json({
  //       message : 'deleted',
  //       item : annotations
  //     });
  //   }
  //
  // });
});
// ==================   end delete a single transcription ==================

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
