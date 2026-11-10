require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// B1: Koneksi Database MongoDB & Listener Express
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Koneksi ke MongoDB berhasil.');
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Koneksi MongoDB gagal:', err.message);
    process.exit(1);
  });