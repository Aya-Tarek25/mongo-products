const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    id: {
        type: Number,
        required: true,
        unique: true,
        minLength: 1
    },
    product: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 50 
    },
    price: {
        type: Number,
        required: true,
        min: 0, 
        maxLength: 15
    },
    quantity: {
        type: Number,
        required: true,
        min: 0, 
        maxLength: 10
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;