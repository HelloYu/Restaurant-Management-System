var express = require('express');
var app = express();
var fs = require('fs');
app.get('/', function (req, res) {
	var html = fs.createReadStream('./www/index.html');
	html.pipe(res);
}).listen(3000);