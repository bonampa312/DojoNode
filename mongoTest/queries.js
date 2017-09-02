var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongoose://localhost/dojonode');

var userSchemaJSON = {
	name : String
}

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model("User", user_schema);

function save(req, res){
	var user = new User({name : req.body.name})
	user.save(function() {
		res.send("Data saved");
	});
}

function users(req, res){
	User.find(function(err,doc) {
		res.send(doc);
	})
}

module.exports = {
	save : save,
	getUsers : users
}

