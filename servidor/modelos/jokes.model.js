const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Broma', JokeSchema);