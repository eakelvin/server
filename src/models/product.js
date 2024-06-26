const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String},
    inStock: { type: Number}

})

const Product = mongoose.model('Product', productSchema)
module.exports = Product