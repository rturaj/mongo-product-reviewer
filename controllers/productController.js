const productService = require('../services/productService');

class ProductController {
  async getAll(req, res, next) {
    try {
      const products = await productService.findAll(req.query);
      res.json(products);
    } catch (err) {
      next(err);
    }
  }
  async getOne(req, res, next) {
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
  async post(req, res, next) {
    try {
      const product = await productService.create(req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async update(req, res, next) {
    try {
      const product = await productService.update(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async delete(req, res, next) {
    try {
      const result = await productService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  async postReview(req, res, next) {
    try {
      const product = await productService.addReview(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async deleteReview(req, res, next) {
    try {
      const product = await productService.removeReview(req.params.id, req.params.reviewId);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async getPriceRange(req, res, next) {
    try {
      const result = await productService.getPriceRange();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  async getStats(req, res, next) {
    try {
      const result = await productService.getStats();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new ProductController();
