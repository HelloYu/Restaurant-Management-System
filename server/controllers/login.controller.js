var userModel = require('../models/users.model');

/**
 * @class login
 * @param {Object} user
 * 用户对象，包括 `user.username` 和 `user.password`
 * @return {Boolean} 如果验证通过返回 True 否则返回 False。
 */
module.exports.login = function(loginUser) {
	if (!loginUser) {
		throw new Error('用户对象不能为空！');
	}

	var user = userModel.findOne(loginUser.username);

	//没有这个用户
	if (!user) {
		return false;
	}

	if (user.password == loginUser.password) {
		loginUser.role = user.role;
		return true;
	} else {
		return false;
	}
}