// Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  location: { type: String, required: true },
  personType: { type: String, required: true },
  seats: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
