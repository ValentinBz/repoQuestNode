var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:prenom', function(req, res, next) {
	res.render('update-user');
});

router.put('/:prenom', (req, res, next) => {
  res.send("yo je suis " + req.body.prenom);
});

module.exports = router;


