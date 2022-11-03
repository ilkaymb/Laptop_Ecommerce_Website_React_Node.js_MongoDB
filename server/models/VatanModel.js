const mongoose = require('mongoose');

const VatanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Vatan', VatanSchema)
/* name: {
     type: String,
    required: true
},*/