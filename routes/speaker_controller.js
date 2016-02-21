var express = require('express');
var router = express.Router();

/* GET projects page. */
// router.get('/list_projects', function(req, res, next) {
//   res.render('list_projects', { title: 'Auto Edit Desktop' });
// });

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
