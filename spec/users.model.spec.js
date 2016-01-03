var user = require('../server/models/users.model');

describe('user.find', function() {
	describe('testing find method',function(){

  	it('should return a user list',function() {
      user.find({},function(err,users) {
          expect(Object.prototype.toString.call(users)).toEqual('[object Array]');
      });
  	
  	});

  	it('should return undefined',function() {
  		expect(user.find({username:'nothing'})).toBeUndefined();
  	});

	})
});