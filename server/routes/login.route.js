var express = require('express'),
		loginCtrl = require('../controllers/login.controller'),
		router = express.Router();

router.post('/login',function(req,res) {
	console.info('req.body.username'+req.body.username);
	var user = { 
		username: req.body.username,
		password: req.body.password
	}

	// 开始使用回调
	loginCtrl.login(user,_cb);

	function _cb(user) {
    if (user.length) {
      res.json({status:200,user:user});
    } else {
      res.json({status:401,message:'授权失败！'});
    }
	};
 

});

module.exports = router;