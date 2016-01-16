/**
 *
 * version: 1.0.4
 * time: 2016-01-16
 *
 */

var
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  login = require('./server/routes/login.route'),
  users = require('./server/routes/users.route');
  menus = require('./server/routes/menus.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


// login 路由
app.use(login);
// 用户操作路由
app.use(users);
// 菜单操作路由
app.use(menus);


var port = process.env.PORT || 7777;

app.listen(port);
console.log('server start on port ' + port);