const Product = require('../models/Product');

class ProductService {
  findAll() {
    return Product.find();
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
}

module.exports = new ProductService();
