const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InscriptionSchema = new Schema({
    "userName": {
        type: String,
        requred: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "passwordAgain": {
        type: String
    }
});

module.exports = inscription = mongoose.model('inscription', InscriptionSchema);