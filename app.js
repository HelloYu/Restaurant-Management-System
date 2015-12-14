/**
 *
 * version: 1.0.1
 * time: 2015-12-14
 *
 */

var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		login = require('./server/routes/login_route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//login 路由
app.use(login);
app.get('/test',function(req,res) {
	 res.end('test');
})

var port = process.env.PORT || 8888;

app.listen(port);
console.log('server start on port ' + port);