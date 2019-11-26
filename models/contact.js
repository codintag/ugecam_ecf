const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    "nomPrenom": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "subject": {
        type: String,
        required: true
    },
    "phone": {
        type: String,
        required: false
    },
    "messages": {
        type: String,
        required: true
    }

})

module.exports = contact = mongoose.model('contact', ContactSchema);
