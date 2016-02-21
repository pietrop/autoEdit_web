var express = require('express');
var router = express.Router();

Annotation = require('../models/annotation.js');




// ================== get all the annotations =====================
router.get('/annotations', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});
// ================== end get all the annotations ==================




// ================== create an annotation ==========================
router.post('/annotations', isLoggedIn, function(req, res, next) {

  var annotation = new Annotation({
    name: req.body.comment
  });

  annotation.save(function(err){
    if(err)
    return next(err);
  });

  // res.render('list_projects', { title: 'Auto Edit Desktop' });
});
// ================== end create an annotation ==========================




// ====================== get a single annotation =======================
router.get('/annotations/:id', isLoggedIn, function(req, res, next) {
  // res.render('list_projects', { title: 'Auto Edit Desktop' });
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

	Annotation.findById(_id, function(err, annotation){

		if(err) return next(err);

		annotation.remove(function(err, annot){
			if(err) return next(err);

			res.format({
				html: function(){
					res.render('deleted_client', {

					});
				},
				json: function(){
					res.json({message : 'deleted',
						item : annot
					});
				}
			});

		});

	});


  // res.render('list_projects', { title: 'Auto Edit Desktop' });
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
