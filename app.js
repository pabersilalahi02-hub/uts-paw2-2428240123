const express = require('express');
const cors = require('cors');
const bagianRoutes = require('./routes/bagianRoutes');
const suratRoutes = require('./routes/suratRoutes');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

// A2: Middleware CORS (Origin dari process.env.CORS_ORIGIN, method GET & POST)
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST']
}));

// Body parser JSON
app.use(express.json());

// Pendaftaran Rute
app.use('/bagian', bagianRoutes);
app.use('/surat', suratRoutes);

// A3: Error Handler terpusat didaftarkan paling akhir
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;