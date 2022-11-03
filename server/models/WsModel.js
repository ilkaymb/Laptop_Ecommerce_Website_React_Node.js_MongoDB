const mongoose = require('mongoose');

const WsModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    site1_name: {
        type: String,
        required: true
    },
    site1_price: {
        type: String,
        required: true
    },
    site1_link: {
        type: String,
        required: true
    },
    site2_name: {
        type: String,
        required: true
    },
    site2_price: {
        type: String,
        required: true
    },
    site2_link: {
        type: String,
        required: true
    },
    site3_name: {
        type: String,
        required: true
    },
    site3_price: {
        type: String,
        required: true
    },
    site3_link: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('web_scrapping_data', WsModel)