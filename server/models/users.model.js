var users = [{
	username: 'admin',
	password: 'admin',
	role: 'waiter'
},{
	username: 'test',
	password: 'test',
	role: 'chief'
}]

'use strict';
//提供给用户登录
module.exports.findOne = function(username) {
	
	console.info(username);
	if (!username) {
		throw new Error('username must not be empty!');
	} 
	var i = 0,
			item;
	for (; item = users[i]; i++) {
		if (item.username == username) return item;
	}
};

//暂时不进行回调异步处理
module.exports.find = function(username) {
	
	//如果空，返回全部
	if (!username) {
		return users;
	} 

	//非空按条件查询，暂时为姓名数组
	var i = 0,
			len = username.length,
			result = [];
	for (; i < len; i++) {
		var item = username[i];
		if (users.indexOf(item) != -1) {
			result.push(item);
		}
	}
	return result;
};
