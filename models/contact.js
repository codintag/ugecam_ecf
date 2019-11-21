const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    "nomPrenom": {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    messages: {
        type: String,
        required: true
    }



})

module.exports = contact = mongoose.model('contact', Contact);

// nomPrenom: "",
//             email: "",
//             subject: "",
//             phone: "",
//             messages: ""