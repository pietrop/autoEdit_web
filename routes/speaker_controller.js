var express = require('express');
var router = express.Router();

Speaker = require('../models/speaker.js');

// get all the speakers
router.get('/speakers', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// create an speaker
router.post('/speakers', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// get a single speaker
router.get('/speakers/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// update a single speaker
router.put('/speakers/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// delete a single speaker
router.delete('/speakers/:id', isLoggedIn, function(req, res, next) {
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
