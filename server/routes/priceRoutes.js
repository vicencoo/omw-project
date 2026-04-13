const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceControllers');
const { authenticate } = require('../middleware/auth');

router.post('/add-station', authenticate, priceController.addStation);

router.get('/get-stations', priceController.getStations);

router.post(
  '/edit-station-prices',
  authenticate,
  priceController.editStationPrice,
);

module.exports = router;
