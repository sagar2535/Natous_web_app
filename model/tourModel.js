/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const tourShchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A Tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourShchema);

module.exports = Tour;
