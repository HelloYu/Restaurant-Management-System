var userModel = require('../models/users.model');


module.exports.login = function(user,cb) {
	if (!user) {
		throw new Error('用户对象不能为空！');
	}

	userModel.find(user,_cb);

  function _cb(_user) {
     
    cb(_user);
  };
  
}