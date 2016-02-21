var express = require('express');
var router = express.Router();

Paperedit = require('../models/paperedit.js');


// ================  get all the paperedits  ================
router.get('/paperedits', isLoggedIn, function(req, res, next) {
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
// ================  end get all the paperedits  ================


// ================ create a paperedit ================
router.post('/paperedits', isLoggedIn, function(req, res, next) {
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
// ================ end create a paperedit ================


// ================ get a single paperedit ================
router.get('/paperedits/:id', isLoggedIn, function(req, res, next) {
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
// ================ end get a single paperedit ================

// ================ update a single paperedit ================
router.put('/paperedits/:id', isLoggedIn, function(req, res, next) {
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
// ================ end update a single paperedit ================


// ================ delete a single paperedit ================
router.delete('/paperedits/:id', isLoggedIn, function(req, res, next) {
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
// ================ end delete a single paperedit ================

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
