var express = require('express'),
		menusCtrl = require('../controllers/menus.controller'),
		router = express.Router();

router.post('/menus',add);
router.get('/menus',get);
router.get('/menus/:id',get);
router.put('/menus/:id',update);
router.delete('/menus/:id',remove);

function add(req,res) {

	var user = { 
		username: req.body.username,
		password: req.body.password,
		role: req.body.role,
	}

	menusCtrl.add(user,_cb);

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
	
	menusCtrl.get(user,_cb);

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
	menusCtrl.update(user,_cb);

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
	

	menusCtrl.remove(user,_cb);

	function _cb(err,user) {
    if (!err) {
      res.json({status:200,result:user});
    } else {
      res.json({status:500,result:err});
    }
	};
};


module.exports = router;