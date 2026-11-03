require('dotenv').config();
const express = require('express');

const loggerMiddleware = require('./middlewares/loggerMiddleware');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const tourRoutes = require('./routes/tourRoutes');

const app = express();

// Parsing JSON body
app.use(express.json());

// Logger Middleware
if (typeof loggerMiddleware === 'function') {
  app.use(loggerMiddleware);
}

// Router API Utama
app.use('/api/tours', tourRoutes);

// Error Handling Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Menjalankan Server (Harus di paling bawah)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});