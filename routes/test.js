var express = require('express');
var router = express.Router();
var { getUsers } = require('../src/controllers/testController'); 

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
