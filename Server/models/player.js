const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    currentScore: {
        type: Number,
        required: false
    },
    highScore: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('Player', playerSchema)