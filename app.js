/**
 *
 * version: 1.0.2
 * time: 2015-12-31
 *
 */

var
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  login = require('./server/routes/login.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//login 路由
app.use(login);
app.get('/test',function(req,res) {
	 res.end('test:maomeif');
})

var port = process.env.PORT || 7777;

app.listen(port);
console.log('server start on port ' + port);