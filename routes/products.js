const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAll);
router.get('/price-range', productController.getPriceRange);
router.get('/stats', productController.getStats);
router.get('/:id', productController.getOne);
router.post('/', productController.post);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.post('/:id/review', productController.postReview);
router.delete('/:id/review/:reviewId', productController.deleteReview);

module.exports = router;
