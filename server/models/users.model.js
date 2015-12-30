'use strict';

var
  monk = require('monk'),
  db = monk('localhost:27017/restaurant');

var users = {
  /**
  * @method find
  * @param {username|empty}
  * 如果参数为空，返回集合所有用户，或者按用户名查找
  * @return {Object} user
  * 返回用户对象，或者集合数组
  */
  find: find,
}

function find(user,cb) {
  
  var users = db.get('users');
  users.find(user,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    console.info(doc);
    cb(doc);
    db.close();
  };
};

module.exports = users;
