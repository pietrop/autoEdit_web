var express = require('express');
var router = express.Router();

Papercut = require('../models/papercut.js');


// get all the papercuts
router.get('/papercuts', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// create an papercut
router.post('/papercuts', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// get a single papercut
router.get('/papercuts/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// update a single papercut
router.put('/papercuts/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// delete a single papercut
router.delete('/papercuts/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});
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
