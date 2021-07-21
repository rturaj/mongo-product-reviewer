const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  author: {
    type: Number,
  },
});

module.exports = ReviewSchema;
