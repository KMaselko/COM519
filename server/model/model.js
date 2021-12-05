const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    genre : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    publisher : {
        type: String,
        required: true
    },
    time : {
        type: Number,
        required: true
    }
})

const games = mongoose.model('games', schema);

module.exports = games;