const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Rute '${req.originalUrl}' tidak ditemukan pada server ini`
  });
};

module.exports = notFoundMiddleware;