const TourModel = require('../models/tourModel');

const getAllTourPackages = (req, res, next) => {
  try {
    const packages = TourModel.getAll();
    res.status(200).json({
      status: 'success',
      message: 'Berhasil mengambil seluruh data paket wisata',
      data: packages
    });
  } catch (error) {
    next(error);
  }
};

const getTourPackageById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const packageData = TourModel.getById(id);

    if (!packageData) {
      return res.status(404).json({
        status: 'fail',
        message: `Paket wisata dengan ID ${id} tidak ditemukan`
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Berhasil mengambil detail paket wisata',
      data: packageData
    });
  } catch (error) {
    next(error);
  }
};

const createTourPackage = (req, res, next) => {
  try {
    const { name, destination, price, duration, quota } = req.body;

    if (!name || !destination || price === undefined || !duration || quota === undefined) {
      return res.status(400).json({
        status: 'fail',
        message: 'Data tidak lengkap. Harap isi name, destination, price, duration, dan quota.'
      });
    }

    const newPackage = TourModel.create({ name, destination, price, duration, quota });
    res.status(201).json({
      status: 'success',
      message: 'Paket wisata berhasil ditambahkan',
      data: newPackage
    });
  } catch (error) {
    next(error);
  }
};

const updateTourPackage = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updatedPackage = TourModel.update(id, req.body);

    if (!updatedPackage) {
      return res.status(404).json({
        status: 'fail',
        message: `Gagal memperbarui. Paket wisata dengan ID ${id} tidak ditemukan`
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Data paket wisata berhasil diperbarui',
      data: updatedPackage
    });
  } catch (error) {
    next(error);
  }
};

const deleteTourPackage = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedPackage = TourModel.delete(id);

    if (!deletedPackage) {
      return res.status(404).json({
        status: 'fail',
        message: `Gagal menghapus. Paket wisata dengan ID ${id} tidak ditemukan`
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Paket wisata berhasil dihapus',
      data: deletedPackage
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTourPackages,
  getTourPackageById,
  createTourPackage,
  updateTourPackage,
  deleteTourPackage
};