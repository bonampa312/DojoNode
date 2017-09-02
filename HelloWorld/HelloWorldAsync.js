var http = require('http'),
	fs = require('fs')
console.log("1");
http.createServer(function(req, res) {
	console.log("2");
	fs.readFile("./index.html", function(err,html) {
		console.log("3");
		res.write(html);
		res.end();
	})
	console.log("4");
}).listen(3050);
console.log("5");