var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users/:prenom', function(req, res, next) {
	res.render('delete-user');
});

router.put('/user', (req, res, next) => {
  let test = req.body.form;
  console.log(test);
});

module.exports = router;


