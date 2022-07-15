const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const game = new Schema({
    answer: String,
    guesses: Array,
    status: String
});

const Data = mongoose.model("Data", game);

module.exports = Data;