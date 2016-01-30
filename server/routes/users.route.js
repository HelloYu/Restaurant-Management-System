var express = require('express'),
    usersCtrl = require('../controllers/users.controller'),
    router = express.Router();

router.post('/users',add);
router.get('/users',get);
router.get('/users/:id',get);
router.put('/users/:id',update);
router.delete('/users/:id',remove);

function add(req,res) {

  var user = { 
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  }

  usersCtrl.add(user,_cb);

  function _cb(err,user) {
    if (!err) {
      res.json({status:200,result:user});
    } else {
      res.json({status:500,result:err});
    }
  };
};

function get(req,res) {

  var user = {};

  if ( req.params['id'] ) {
    user['_id'] = req.params['id'];
  }
  
  usersCtrl.get(user,_cb);

  function _cb(err,user) {
    if (!err) {
      res.json({status:200,result:user});
    } else {
      res.json({status:500,result:err});
    }
  };
};

function update(req,res) {

  var user = {};

  var 
    key = null,
    items = req.body;
  for (key in items) {
    user[key] = items[key];
  }

  user._id = req.params.id;
  usersCtrl.update(user,_cb);

  function _cb(err,user) {
    if (!err) {
      res.json({status:200,result:user});
    } else {
      res.json({status:500,result:err});
    }
  };
};

function remove(req,res) {

  var user = {};

  if ( req.params['id'] ) {
    user['_id'] = req.params['id'];
  }
  

  usersCtrl.remove(user,_cb);

  function _cb(err,user) {
    if (!err) {
      res.json({status:200,result:user});
    } else {
      res.json({status:500,result:err});
    }
  };
};


module.exports = router;