var userModel = require('../models/users.model');

/**
 * @class login
 * @param {Object} user
 * 用户对象，包括 `user.username` 和 `user.password`
 * @return {Boolean} 如果验证通过返回 True 否则返回 False。
 */
module.exports.login = function(user,cb) {
	if (!user) {
		throw new Error('用户对象不能为空！');
	}

	userModel.find(user,_cb);

  function _cb(_user) {
     
    cb(_user);
  };
  
}