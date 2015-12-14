var userModel = require('../models/users_model');

module.exports.login = function(userLogin) {
	if (!userLogin) {
		throw new Error('用户对象不能为空！');
	}

	var user = userModel.findOne(userLogin.username);

	//没有这个用户
	if (!user) {
		return false;
	}

	if (user.password == userLogin.password) {
		userLogin.role = user.role;
		return true;
	} else {
		return false;
	}
}