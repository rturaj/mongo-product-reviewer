const mongoose = require('mongoose');
const Review = require('./Review');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['electronics', 'books', 'games'],
    },
    reviews: [Review],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

ProductSchema.virtual('rate').get(function () {
  const sum = this.reviews.map((el) => el.rate).reduce((a, b) => a + b, 0);
  const count = this.reviews.length;
  return Math.floor(sum / count);
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
