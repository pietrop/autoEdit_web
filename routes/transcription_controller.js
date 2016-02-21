var express = require('express');
var router = express.Router();

Transcript = require('../models/transcript.js');

// get all the transcriptions
router.get('/transcriptions', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// create an transcription
router.post('/transcriptions', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// get a single transcription
router.get('/transcriptions/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// update a single transcription
router.put('/transcriptions/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// delete a single transcription
router.delete('/transcriptions/:id', isLoggedIn, function(req, res, next) {
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
