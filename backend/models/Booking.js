const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  personType: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Booking', BookingSchema);
