const Bagian = require('../models/bagian');

// POST /bagian
exports.createBagian = async (req, res, next) => {
  try {
    const { kode, nama } = req.body;
    const bagianBaru = await Bagian.create({ kode, nama });
    res.status(201).json(bagianBaru);
  } catch (error) {
    next(error);
  }
};

// GET /bagian
exports.getAllBagian = async (req, res, next) => {
  try {
    const dataBagian = await Bagian.find();
    res.status(200).json(dataBagian);
  } catch (error) {
    next(error);
  }
};