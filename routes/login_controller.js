var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');

var Account = require('../models/account');

var router = express.Router();


// ======================= register =======================
router.post('/register', function(req, res) {
  Account.register(new Account({
    username: req.body.username
  }), req.body.password, function(err, account) {
    if (err) {
      return res.render('register', {
        account: account
      });
    }

    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
});
// ======================= end register =======================

// ======================= login =======================
router.get('/login', function(req, res) {
  res.render('login', {
    title: 'Auto Edit Desktop Edition - Log In',
    user: req.user,
    message: req.flash('loginMessage')
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});
// ======================= end login =======================


// ======================= logout =======================
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
// ======================= end logout =======================


router.get('/ping', function(req, res) {
  res.status(200).send("pong!");
});


module.exports = router;
