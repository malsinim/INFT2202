const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');

router.get('/products', productsController.productList);
router.get('/:id', productsController.productShow);

module.exports = router;

