var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser')
var app = express();

app.listen(3050, function() {
	console.log('Listening at port 3050')
});
app.use(bodyParser.urlencoded({
	extend : true
}));
app.use('/', routes);

