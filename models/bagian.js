const mongoose = require('mongoose');

const bagianSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: [true, 'Kode bagian wajib diisi'],
    unique: true,
    uppercase: true,
    trim: true
  },
  nama: {
    type: String,
    required: [true, 'Nama bagian wajib diisi'],
    trim: true
  }
});

module.exports = mongoose.model('Bagian', bagianSchema);