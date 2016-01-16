var user = require('../server/controllers/users.controller');

describe('user.controller Testing cases', function() {
	describe('testing get method',function(){

  	it('should return a user list',function() {
      user.get({},function(err,users) {
          expect(Object.prototype.toString.call(users)).toEqual('[object Array]');
      });
  	
  	});

  	it('should return undefined',function() {
  		expect(user.get({username:'nothing'})).toBeUndefined();
  	});

	})
});