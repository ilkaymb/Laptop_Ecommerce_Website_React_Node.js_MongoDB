const mongoose = require('mongoose');

const ourProductsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
},{ versionKey: false })

module.exports = mongoose.model('our_products', ourProductsSchema)