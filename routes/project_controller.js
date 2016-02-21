var express = require('express');
var router = express.Router();

Project = require('../models/project.js');


// get all the projects
router.get('/projects', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// create an project
router.post('/projects', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// get a single project
router.get('/projects/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// update a single project
router.put('/projects/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});

// delete a single project
router.delete('/projects/:id', isLoggedIn, function(req, res, next) {
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
