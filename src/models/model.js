const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user: {
        required: true,
        type: String
    },
    score: [{ type: String, required: true }]
})

module.exports = mongoose.model('Data', dataSchema);