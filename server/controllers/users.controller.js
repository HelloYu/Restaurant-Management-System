var userModel = require('../models/user.model');

var users = {
  add: add,
  get: get,
  update: update,
  remove: remove
};



function add(user,cb) {
  userModel.insert(user,cb);
};


function get(user,cb) {
  userModel.find(user,cb);
};


function update(user,cb) {
  userModel.update(user,cb);
};


function remove(id,cb) {
  userModel.remove(id,cb);
};
module.exports = users;