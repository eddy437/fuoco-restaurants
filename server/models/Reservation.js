const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    guests: { type: Number, required: true, min: 1, max: 10 },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    specialRequests: { type: String, trim: true, default: '' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reservation', reservationSchema);
