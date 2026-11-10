const mongoose = require('mongoose');

const pengirimSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: [true, 'Nama pengirim wajib diisi'],
      trim: true
    },
    instansi: {
      type: String,
      required: [true, 'Instansi pengirim wajib diisi'],
      trim: true
    }
  },
  { _id: false }
);

const suratSchema = new mongoose.Schema({
  noSurat: {
    type: String,
    required: [true, 'Nomor surat wajib diisi'],
    unique: true,
    trim: true
  },
  perihal: {
    type: String,
    required: [true, 'Perihal wajib diisi'],
    trim: true
  },
  jumlahLampiran: {
    type: Number,
    required: [true, 'Jumlah lampiran wajib diisi'],
    min: [0, 'Jumlah lampiran minimal 0']
  },
  sifat: {
    type: String,
    required: [true, 'Sifat surat wajib diisi'],
    trim: true
  },
  pengirim: {
    type: pengirimSchema,
    required: [true, 'Data pengirim wajib diisi']
  },
  bagianId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bagian',
    required: [true, 'Bagian ID wajib diisi']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Surat', suratSchema);