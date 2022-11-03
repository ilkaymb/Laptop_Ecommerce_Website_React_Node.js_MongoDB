const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    item_name: {
        type: String,
        required: true
    },
    site1_img_url: {
        type: String,
        required: true
    },
    site1_link: {
        type: String,
        required: true
    },
    site1_price: {
        type: String,
        required: true
    },
    site1_price: {
        type: String,
        required: true
    },
    site2_img_url: {
        type: String,
        required: true
    },
    site2_link: {
        type: String,
        required: true
    },
    site2_price: {
        type: String,
        required: true
    },
    site2_price: {
        type: String,
        required: true
    },
    site3_img_url: {
        type: String,
        required: true
    },
    site3_link: {
        type: String,
        required: true
    },
    site3_price: {
        type: String,
        required: true
    },
    site3_price: {
        type: String,
        required: true
    },


})

module.exports = mongoose.model('web_scrapping', itemSchema)