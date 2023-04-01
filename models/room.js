const mongoose = require('mongoose');

//shema for room doc
const roomSchema = new mongoose.Schema({
    address: {
        type: String,
        required:'Address is required'
    },
    city: {
        type: String,
        required:'City is required'
    },
    roomType: {
        type: String,
        required:'Enter a room type'
    },
    price: {
        type: Number,
        required:'Please enter a valid price'
    },
    comments: {
        type: String
    }
});

module.exports = mongoose.model('Room',roomSchema);