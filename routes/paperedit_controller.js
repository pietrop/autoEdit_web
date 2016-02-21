var express = require('express');
var router = express.Router();

Paperedit = require('../models/paperedit.js');


// get all the paperedits
router.get('/paperedits', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// create an paperedit
router.post('/paperedits', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// get a single paperedit
router.get('/paperedits/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// update a single paperedit
router.put('/paperedits/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// delete a single paperedit
router.delete('/paperedits/:id', isLoggedIn, function(req, res, next) {
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
