const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');

// Proteksi seluruh rute tours dengan API Key
router.use(apiKeyMiddleware);

router.get('/', tourController.getAllTourPackages);
router.get('/:id', tourController.getTourPackageById);
router.post('/', tourController.createTourPackage);
router.put('/:id', tourController.updateTourPackage);
router.delete('/:id', tourController.deleteTourPackage);

module.exports = router;