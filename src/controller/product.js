const Product = require('../models/product');

const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProduct = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateProduct = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const deleteProduct = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: 'Server Error'})
    }
}

module.exports = { 
    createProduct, getProduct, updateProduct, deleteProduct,  getAllProducts 
}