class ProductController {
  async getProducts(req, res, next) {
    try {
      res.json({
        products: {
          test1: 'asdasda',
          test2: 'adsads',
        },
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new ProductController();
