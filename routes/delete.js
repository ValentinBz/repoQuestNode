var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:supp(\\d+)', function(req, res, next) {
	res.render('delete-user', { supp : req.params.supp });
});

router.delete('/:supp(\\d+)', (req, res, next) => {
 	res.send("delete :" + req.params.supp);
});

module.exports = router;



/* GET remove user. */
// router.get('/:id(\\d+)', function(req, res, next) {
//   res.render('delete-user', { id : req.params.id });
// });

//  Delete user with id. 
// router.delete('/:id(\\d+)', function(req, res, next) {
//   res.send('No more user with id ' + req.params.id);
// });

