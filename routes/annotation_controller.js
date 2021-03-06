var express = require('express');
var router = express.Router();

// use multer for multiform type data possibily

Annotation = require('../models/annotation.js');


// ================== get all the annotations =====================
router.get('/annotations', isLoggedIn, function(req, res, next) {

  Annotation.find(function(err, annotations) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) res.send(err)

    res.format({

      html: function() {
        res.render('list_annotations', {
          title: 'Auto Edit - List Annotations',
          annotation: annotations
        });
      },
      json: function() {
        res.json({
          message: 'annotation',
          item: annotations
        });
      }

    });

  });

});
// ================== end get all the annotations ==================


// ================== create an annotation ==========================
router.post('/annotations', isLoggedIn, function(req, res, next) {

  var annotation = new Annotation({
    name: req.body.comment
  });

  annotation.save(function(err) {

    if (err) return next(err);

    res.format({

      html: function() {
        res.render('add_annotations', {
          title: 'Auto Edit - Add Annotations',
          annotation: req.body.comment
        });
      },
      json: function() {
        res.json({
          message: 'saved',
          item: req.body.comment
        });
      }

    });

  });

});
// ================== end create an annotation ==========================


// ====================== get a single annotation =======================
router.get('/annotations/:id', isLoggedIn, function(req, res, next) {

  _id = req.params.id;

  Annotation.findById(_id, function(err, annotation) {

    res.format({
      html: function() {
        res.render('list_single_annotation', {

        });
      },
      json: function() {
        res.json({
          message: 'list',
          item: annotation
        });
      }
    });

  });


});
// ====================== end get a single annotation ===================


// ====================== update a single annotation =====================
router.put('/annotations/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});
// ====================== end update a single annotation ==================


// ====================== delete a single annotation ======================
router.delete('/annotations/:id', isLoggedIn, function(req, res, next) {

  _id = req.params.id;

  Annotation.findById(_id, function(err, annotation) {

    if (err) return next(err);

    annotation.remove(function(err, annot) {

      if (err) return next(err);

      res.format({

        html: function() {
          res.render('deleted_annotation', {

          });

        },
        json: function() {
          res.json({
            message: 'deleted',
            item: annot
          });
        }

      });

    });

  });

});
// ====================== end delete a single annotation =================


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
