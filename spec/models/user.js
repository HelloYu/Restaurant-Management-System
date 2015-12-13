var users = [{
	username: 'admin',
	password: 'admin',
	role: 'waiter'
},{
	username: 'test',
	password: 'test',
	role: 'chief'
}]
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
