var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	delete req.session.song
  delete req.session.stup
  res.render('index', { title: 'Express' });
});

router.get('/session-in', (req, res, next) => {
  req.session.stup = "the antidote"
  req.session.song = "be bop a lula"
  res.end('done');
});

router.get('/session-out', (req, res) => {
	res.end(`var stup : ${req.session.stup} / var song : ${req.session.song}`);
})

module.exports = router;

