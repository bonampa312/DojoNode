var express = require('express');
var router = express.Router();
var fs = require('fs');
var db = require('./queries');


router.get("/", function(req ,res) {
	fs.readFile("index.html", function(err, html) {
		res.write(html);
		res.end();
	})
})

router.post("/save", function(req, res) {
	db.save();
})

router.get('/users', db.getUsers);

module.exports = router;