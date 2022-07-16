const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true
    },
    guesses: {
        type: [[String]],
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model("Game", gameSchema);