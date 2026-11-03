const errorHandlerMiddleware = (err, req, res, next) => {
  // Menangani khusus sintaks JSON rusak/invalid dari request body
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      status: 'fail',
      message: 'Format payload JSON rusak/invalid'
    });
  }

  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Terjadi kesalahan internal pada server'
  });
};

module.exports = errorHandlerMiddleware;