require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservations');
const contactRoutes = require('./routes/contact');
const galleryRoutes = require('./routes/gallery');
const testimonialRoutes = require('./routes/testimonials');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'Fuoco Restaurants API' }));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🔥 Fuoco Restaurants server running on http://localhost:${PORT}`);
});

module.exports = app;
