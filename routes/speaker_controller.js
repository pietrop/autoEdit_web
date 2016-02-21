var express = require('express');
var router = express.Router();

Speaker = require('../models/speaker.js');

// =================== get all the speakers ===================
router.get('/speakers', isLoggedIn, function(req, res, next) {
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
// =================== end get all the speakers ===================


// =================== create a speaker ===================
router.post('/speakers', isLoggedIn, function(req, res, next) {
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
// =================== end create a speaker ===================


// =================== get a single speaker ===================
router.get('/speakers/:id', isLoggedIn, function(req, res, next) {
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
// =================== end get a single speaker ===================


// =================== update a single speaker ===================
router.put('/speakers/:id', isLoggedIn, function(req, res, next) {
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
// =================== end update a single speaker ===================


// =================== delete a single speaker ===================
router.delete('/speakers/:id', isLoggedIn, function(req, res, next) {
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
// =================== end delete a single speaker ===================


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
