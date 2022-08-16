const express = require('express');
const router = express.Router();
const ipBlacklist = require('../controllers/ipBlacklist');


router.get('/blacklist/', ipBlacklist.checkBlacklist);


module.exports = router;
