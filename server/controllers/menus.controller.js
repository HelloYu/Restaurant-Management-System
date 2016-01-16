var menuModel = require('../models/menu.model');

var menus = {
  add: add,
  get: get,
  update: update,
  remove: remove
};



function add(menu,cb) {
  menuModel.insert(menu,cb);
};


function get(menu,cb) {
  menuModel.find(menu,cb);
};


function update(menu,cb) {
  menuModel.update(menu,cb);
};


function remove(id,cb) {
  menuModel.remove(id,cb);
};
module.exports = menus;