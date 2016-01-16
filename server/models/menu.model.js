'use strict';
var
  monk = require('monk'),
  db = monk('localhost:27017/restaurant');

var menu = {
  find: find,
  update: update,
  insert: insert,
  remove: remove
};

function find(menu,cb) {
  var menus = db.get('menus');
  menus.find(menu,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    cb(err,doc);
  };
}

// 更新应该只需要更新相应的键值，而不是整个覆盖，monk好像没有这个方法。
function update(menu,cb) {
  var menus = db.get('menus');
  menus.updateById(menu._id,menu,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    cb(err,doc);
  };
}

function insert(menu,cb) {
  var menus = db.get('menus');
 
  menus.insert(menu,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    cb(err,doc);
  };
}

function remove(menu,cb) {
   var menus = db.get('menus');

  menus.remove(menu,_cb);

  function _cb(err,doc) {
    if (err) throw err;
    console.info(doc);
    cb(err,doc);
  };
}
module.exports = menu;