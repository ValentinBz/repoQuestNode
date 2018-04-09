var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/update', function(req, res, next) {
  res.render('update-user', {titreUD: 'Update'});
});
router.put('/', function(req, res, next) {
  res.render('index', {titreUD: "The new name is " + req.body.prenom});
});


router.get('/delete', function(req, res, next) {
  res.render('delete-user', { titreUD: "Delete" });
});
router.delete('/', function(req, res, next) {
  res.render('index', {titreUD: "No more user with id  " + req.body.id});
});


router.put('/:prenom(\\w+)', function(req, res, next) {
  res.send("The new name is " + req.params.prenom);
});

router.delete('/:sess(\\d+)', function(req, res, next) {
  res.send("No more user with id " + req.params.sess);
});

module.exports = router;


