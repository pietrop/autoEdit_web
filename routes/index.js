var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Auto Edit Desktop',
    user : req.user
  });
});

router.get('/home', isLoggedIn, function(req, res, next) {
  res.render('home', {
    title: 'Auto Edit Desktop',
    user : req.user
  });
});

router.get('/register', function(req, res) {
    res.render('register', {
        title: 'Auto Edit Desktop - Register'
    });
});

router.get('/about', isLoggedIn, function(req, res, next) {
  res.render('about', {
    title: 'Auto Edit Desktop'
  });
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
