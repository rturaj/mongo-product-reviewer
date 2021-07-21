const Product = require('../models/Product');
const productService = require('../services/productService');

class ProductController {
  async getProducts(req, res, next) {
    try {
      const products = await productService.findAll();
      res.json(products);
    } catch (err) {
      next(err);
    }
  }
  async getProduct(req, res, next) {
    try {
      const product = await productService.findById(req.params.id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async postProduct(req, res, next) {
    try {
      const product = await productService.create(req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async updateProduct(req, res, next) {
    try {
      const product = await productService.update(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async deleteProduct(req, res, next) {
    try {
      const result = await productService.delete(req.params.id);
      console.log(result);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new ProductController();
