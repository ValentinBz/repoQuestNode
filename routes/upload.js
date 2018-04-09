var express = require('express');
var router = express.Router();
let path = require("path");
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs'); 

router.get('/', function(req, res, next) {
		res.sendFile(path.join(__dirname, '../views', 'upload.html'));
});

router.post('/', upload.array('monfichier'), function (req, res, next) {
	console.log(req.files);
	for (let i = 0; i < 2; i++) {
		if(req.files[i].mimetype !== 'image/png') {
				console.log('error mimetype fichier n°', i);
		}	else if (req.files[i].size > 3000000) {
				console.log('error size fichier n°', i);
		} else {
			fs.rename(req.files[i].path, 'public/images/' + req.files.originalname, function(err){
		    if (err) {
		        console.log('problème durant le déplacement'); 
		    } else {
		        console.log('Fichier uploadé avec succès'); 
		    }
			})
		}
	}
});

module.exports = router;

