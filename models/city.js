const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'You can not leave city blank',
        minleght: [3, 'Empty name'],
        maxlenght: [50, 'Name is too long']
    }
});
module.exports = mongoose.model('City', citySchema);