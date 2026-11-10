const express = require('express');
const router = express.Router();
const suratController = require('../controllers/suratController');

router.post('/', suratController.createSurat);
router.get('/', suratController.getSurat);
router.get('/:id', suratController.getSuratById);

module.exports = router;