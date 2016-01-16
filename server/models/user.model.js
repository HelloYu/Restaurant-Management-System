'use strict';

var
  monk = require('monk'),
  db = monk('localhost:27017/restaurant');

var users = {
  /**
  * @method find
  * @param {Object} user|{}
  * 如果参数为空，返回集合所有用户，或者按用户查找
  * @return {Object} user
  * 返回用户对象，或者集合数组
  */
  find: find,
  /**
  * @method update
  * @param {Object} user
  * 通过_id进行更新
  * @return {Number} doc
  * 更新影响的文档数量
  */
  update: update,
  /**
  * @method insert
  * @param {Object} user
  * 进行添加用户操作
  * @return {Object} user
  * 返回添加成功后的用户，带_id
  */
  insert: insert,
  /**
  * @method remove
  * @param {Object} user
  * 根据_id进行删除
  * @return {Number} doc
  * 返回删除的文档数量
  */
  remove: remove,
}

function find(user,cb) {
  
  var users = db.get('users');
  users.find(user,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    cb(err,doc);
  };
};

function update(user,cb) {
  
  var users = db.get('users');
  users.updateById(user._id,user,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    cb(err,doc);
  };
};

function insert(user,cb) {
  var users = db.get('users');
 
  users.insert(user,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    cb(err,doc);
  };
};

function remove(user,cb) {

  var users = db.get('users');

  users.remove(user,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    console.info(doc);
    cb(err,doc);
  };
};
// db.close();
module.exports = users;
