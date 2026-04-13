const express = require('express');
const router = express.Router();
const contactContoller = require('../controllers/contactControllers');

router.post('/send-email', contactContoller.sendEmail);

module.exports = router;
