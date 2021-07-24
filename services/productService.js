const Product = require('../schemas/Product');

class ProductService {
  findAll({ page = 1, perPage = 5, sortBy = 1, sortDesc = 1, ...filters }) {
    return Product.find(filters)
      .sort({ [sortBy]: +sortDesc })
      .skip(+perPage * (+page - 1))
      .limit(+perPage);
  }
  findById(id) {
    return Product.findById(id);
  }
  async create(data) {
    const product = new Product(data);
    await product.save();
    return product;
  }
  update(id, data) {
    return Product.findByIdAndUpdate(id, data);
  }

  async delete(id) {
    await Product.findByIdAndRemove(id);
    return { id };
  }

  async addReview(id, data) {
    const product = await Product.findById(id);
    product.reviews.push(data);
    await product.save();
    return product;
  }

  async removeReview(id, reviewId) {
    const product = await Product.findById(id);
    product.reviews.id(reviewId).remove();
    await product.save();
    return product;
  }

  async getPriceRange() {
    const [min] = await Product.find().sort({ price: 1 }).limit(1);
    const [max] = await Product.find().sort({ price: -1 }).limit(1);
    return { min: min?.price || 0, max: max?.price || 0 };
  }

  async getStats() {
    const result = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          avg: { $avg: '$price' },
          min: { $min: '$price' },
          max: { $max: '$price' },
        },
      },
      {
        $project: {
          _id: 0,
          category: '$_id',
          avg: 1,
          min: 1,
        },
      },
    ]);

    return result;
  }
}

module.exports = new ProductService();
