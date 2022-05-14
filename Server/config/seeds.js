const db = require("./connection");
const { Player } = require("../models/player");
const Player = require("../models/player");

db.once("open", async () => {
  await Player.deleteMany();

  const Player = await Player.insertMany([
    {
      username: "Tin of Cookies",
      password: "",
      currentScore: 0,
      highScore: 500,
    },
    {
      username: "Canned Coffee",
      password: "",
      currentScore: 0,
      highScore: 500,
    },
    {
      username: "Toilet Paper",
      password: "",
      currentScore: 0,
      highScore: 20,
    },
    {
      username: "Handmade Soap",
      password: "",
      currentScore: 0,
      highScore: 50,
    },
    {
      username: "Set of Wooden Spoons",
      password: "",
      currentScore: 09,
      highScore: 100,
    },
    {
      username: "Camera",
      password: "",
      currentScore: 0,
      highScore: 30,
    },
    {
      username: "Tablet",
      password: "",
      currentScore: 0,
      highScore: 30,
    },
  ]);
  
  console.log('users seeded');

  process.exit();
});
