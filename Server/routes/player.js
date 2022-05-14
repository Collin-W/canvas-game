const express = require("express")
const router = express.Router()
const Player = require("../models/player")

//get all players
router.get("/", async (req, res) => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

//get a player by id

//create a new player
router.post("/", async (req, res) => {
    const player = new Player({
      username: req.body. username,
      highScore: req.body.highScore
    });
    try {
      const newPlayer = await player.save();
      //201 is a suscessful post
      res.status(201).json(newPlayer);
    } catch (err) {
      //400 when it is a user caused error
      res.status(400).json({ message: err.message });
    }
  });

//update a player 


//delete a player

module.exports = router;