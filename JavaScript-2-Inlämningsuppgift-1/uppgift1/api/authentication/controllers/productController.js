const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../models/products/users/auth')

router.get('/', productModel.getProducts);
router.get('/:id', productModel.getProducts);

router.post('/new', auth.verifyToken, productModel.createProduct);

router.patch('/:id', auth.verifyToken, productModel.updateProduct);

router.delete('/:id', auth.verifyToken, productModel.deleteProduct);




module.exports = router;