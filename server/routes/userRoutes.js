const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContollers');

router.post('/login', userController.login);

router.post('/add-user', userController.addUser);

module.exports = router;
