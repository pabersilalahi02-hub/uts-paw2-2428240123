const Surat = require('../models/surat');

// POST /surat (Hanya field resmi dari body yang diambil)
exports.createSurat = async (req, res, next) => {
  try {
    const { noSurat, perihal, jumlahLampiran, sifat, pengirim, bagianId } = req.body;
    const suratBaru = await Surat.create({
      noSurat,
      perihal,
      jumlahLampiran,
      sifat,
      pengirim,
      bagianId
    });
    res.status(201).json(suratBaru);
  } catch (error) {
    next(error);
  }
};

// GET /surat (Mendukung query filter 'sifat' dan projection)
exports.getSurat = async (req, res, next) => {
  try {
    const filterQuery = {};
    
    // Filter exact match jika parameter 'sifat' dikirim
    if (req.query.sifat) {
      filterQuery.sifat = req.query.sifat;
    }

    // Projection: _id, noSurat, perihal, jumlahLampiran, sifat
    const daftarSurat = await Surat.find(filterQuery)
      .select('noSurat perihal jumlahLampiran sifat');

    res.status(200).json(daftarSurat);
  } catch (error) {
    next(error);
  }
};

// GET /surat/:id (Populate bagianId dengan kode dan nama)
exports.getSuratById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const surat = await Surat.findById(id).populate('bagianId', 'kode nama');

    if (!surat) {
      const error = new Error('Data surat tidak ditemukan');
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json(surat);
  } catch (error) {
    next(error);
  }
};