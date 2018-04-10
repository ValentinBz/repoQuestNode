var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
		service: "gmail",
    host: "smtp-relay.gmail.com",
    port: 587,
    auth: {
        user: 'valentin.bouzin24@gmail.com',
        pass: '8um43frtghqzy7'
    }
});

router.get('/', (req,res) => {
		res.render('mail');

		smtpTransport.sendMail({
	    from: "loremcupcake@gmail.com", // Expediteur
	    to: "valentin.bouzin24@gmail.com", // Destinataires
	    subject: "lorem cupcake", // Sujet
	    text: "Hey GrandMa, give me the recipe for your awesome cookie please", // plaintext body
	    html: "<b>Hey GrandMa !</b> give me the recipe for your awesome cookie please", // html body
		}, (err, res) => {
		    if(err){
		        console.log(err);
		    }else{
		        console.log("Message sent: " + res.message);
		    }
		});
});

module.exports = router;

