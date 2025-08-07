const express = require('express');
const router = express.Router();
const controller = require('../controllers/usernameController');

router.get('/', controller.listUsernames);

module.exports = router;