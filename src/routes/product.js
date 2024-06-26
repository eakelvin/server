const express = require('express');
const router = express.Router();

const { 
    createProduct,
    getProduct, 
    updateProduct,
    deleteProduct,
    getAllProducts, 
} = require('../controller/product')

router.post('/create', createProduct)
router.get('/all', getAllProducts )

module.exports = router;