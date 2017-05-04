var express = require('express');  
var router = express.Router();

/* GET token listing. */
router.get('/', function(req, res, next) {  
  res.json({
    users: [{
    	"token": "aXJvbm1hbg==",
		"user": {
		"id": 1,
		"href": "/users/1",
		"username": "ironman",
		"password": "123"
		}
	}]
  })
});

module.exports = router; 

