const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  //default scores at 0
  currentScore: {
    type: Number,
    required: true,
  },
  highScore: {
    type: Number,
    required: true,
  },
});

//need to set up bycrpt still
// //middleware for password creatiion
// playerSchema.pre('save', async function(next) {
//     if(this.isNew || this.isModified('password')) {
//         const saltRounds = 5;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// })
//compare the incoming password with the hashed password
// playerSchema.methods.isCorrectPassword = async function(password) {
//     return await bcrypt.compare(password, this.password)
// }

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
