const express = require('express');
const router = express.Router();
const bagianController = require('../controllers/bagianController');

router.post('/', bagianController.createBagian);
router.get('/', bagianController.getAllBagian);

module.exports = router;