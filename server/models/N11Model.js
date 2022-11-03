const mongoose = require('mongoose');

const N11Schema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    Site: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Img: {
        type: String,
        required: true
    },
    Url: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('N11', N11Schema)