const express = require('express');
const router = express.Router();

const { 
    createProduct,
    getProduct, 
    updateProduct,
    deleteProduct,
    getAllProducts, 
} = require('../controller/product')

router.post('/create', createProduct);
router.get('/all', getAllProducts );
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;