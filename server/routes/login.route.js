var express = require('express'),
		loginCtrl = require('../controllers/login.controller'),
		router = express.Router();

router.post('/login',function(req,res) {
	console.info('req.body.username'+req.body.username);
	var user = { 
		username: req.body.username,
		password: req.body.password
	}

	//都暂时没有考虑使用回调和promise
	var auth = loginCtrl.login(user);
  if (auth) {
  	res.json({status:200,user:user});
  } else {
  	res.json({status:401,message:'授权失败！'});
  }

});

module.exports = router;