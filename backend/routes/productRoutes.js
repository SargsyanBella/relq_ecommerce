const express = require('express');
const router = express.Router();

const { getProducts, getProductById,createProduct,updateProduct,deleteProduct} = require('../controller/productControllers');

//@desc GET all products from db
//@route GET /api/products
//@access Public
router.get('/', getProducts )

//@desc GET a products by id from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById);
router.post('/',createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


    


module.exports = router;