const express = require('express');
const router = express.Router();
const controller = require('../controllers/usernameController');

router.get('/', controller.showForm);
router.post('/', controller.addUsername);

module.exports = router;