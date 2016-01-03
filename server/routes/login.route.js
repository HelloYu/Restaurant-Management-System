var express = require('express'),
		loginCtrl = require('../controllers/login.controller'),
		router = express.Router();

router.post('/login',function(req,res) {

	var user = { 
		username: req.body.username,
		password: req.body.password
	}

	// 开始使用回调
	loginCtrl.login(user,_cb);

	function _cb(err,user) {
    if (err) {
      res.json({status:200,user:user});
    } else {
      res.json({status:401,message:'授权失败！'});
    }
	};
 

});

module.exports = router;