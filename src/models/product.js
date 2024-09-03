const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Please enter Product name"]
    },
    price: { type: Number, required: true },
    quantity: { type: Number },
    image: { type: String },

}, {timestamps: true})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;