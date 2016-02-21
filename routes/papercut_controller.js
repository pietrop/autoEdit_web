var express = require('express');
var router = express.Router();

Papercut = require('../models/papercut.js');


// ==============  get all the papercuts  ==============
router.get('/papercuts', isLoggedIn, function(req, res, next) {
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
// ==============  end get all the papercuts  ==============


// ============== create an papercut ==============
router.post('/papercuts', isLoggedIn, function(req, res, next) {
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
// ============== end create an papercut ==============


// ============== get a single papercut ==============
router.get('/papercuts/:id', isLoggedIn, function(req, res, next) {
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
// ============== end get a single papercut ==============


// ============== update a single papercut ==============
router.put('/papercuts/:id', isLoggedIn, function(req, res, next) {
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
// ============== end update a single papercut ==============


// ============== delete a single papercut ==============
router.delete('/papercuts/:id', isLoggedIn, function(req, res, next) {
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
// ============== end delete a single papercut ==============


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
