var user = require('./models/user');

describe('user.findOne', function() {
	describe('find a user',function(){

		it('should return admin user', function() {
	  	var admin = user.findOne('admin');
	    expect(admin.username).toEqual('admin');
	    expect(admin.password).toEqual('admin');
  	});

		it('should return test user', function() {
	  	var test = user.findOne('test');
	    expect(test.username).not.toEqual('admin');
	    expect(test.password).toEqual('test');
  	});

  	it('should throw a error',function() {
  		expect(function(){user.findOne();}).toThrowError('username must not be empty!');
  	});

  	it('should return undefined',function() {
  		expect(user.findOne('nothing')).toBeUndefined();
  	});

  	it('should be defined',function() {
  		expect(user.findOne('admin')).toBeDefined();
  	});
	})
});