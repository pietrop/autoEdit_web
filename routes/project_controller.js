var express = require('express');
var router = express.Router();

Project = require('../models/project.js');


// ==================  get all the projects  ==================
router.get('/projects', isLoggedIn, function(req, res, next) {
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
// ==================  end get all the projects  ==================


// ================== create a project ==================
router.post('/projects', isLoggedIn, function(req, res, next) {
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
// ================== end create a project ==================


// ================== get a single project ==================
router.get('/projects/:id', isLoggedIn, function(req, res, next) {
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
// ================== end get a single project ==================


// ================== update a single project ==================
router.put('/projects/:id', isLoggedIn, function(req, res, next) {
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
// ================== end update a single project ==================


// ================== delete a single project ==================
router.delete('/projects/:id', isLoggedIn, function(req, res, next) {
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
// ================== end delete a single project ==================

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
