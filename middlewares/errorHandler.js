// Middleware rute tidak ditemukan (404)
const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: 'Rute tidak ditemukan' });
};

// Middleware terpusat penanganan galat (Error Handler)
const errorHandler = (err, req, res, next) => {
  // 1. Format JSON pada body request rusak
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Format JSON tidak valid' });
  }

  // 2. ID bukan ObjectId Mongoose (CastError) - tanpa menyebut nama model
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Format ID tidak valid' });
  }

  // 3. Pelanggaran aturan schema (ValidationError)
  if (err.name === 'ValidationError') {
    const detail = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      message: 'Data tidak valid',
      detail: detail
    });
  }

  // 4. Nilai unik bentrok (MongoDB Duplicate Key / Error Code 11000)
  if (err.code === 11000) {
    return res.status(409).json({ message: 'Data unik sudah terdaftar' });
  }

  // 5. Galat yang dilempar sengaja (misal data 404 dari controller)
  if (err.statusCode || err.status) {
    const status = err.statusCode || err.status;
    return res.status(status).json({ message: err.message });
  }

  // 6. Galat lain tidak terduga (500) tanpa stack trace
  res.status(500).json({ message: 'Terjadi kesalahan pada server' });
};

module.exports = {
  notFoundHandler,
  errorHandler
};