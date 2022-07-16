const express = require('express');
const router = express.Router();

const Game = require('../models/gameSchema');

//Create a new game.
// http://172.16.2.30:8081/create
router.post("/", (req, res) => {
    const game = new Game(req.body);

    game.save().then(() => {
        if(game.isNew){
            console.log("Failed to save data.");
        }else{
            console.log("Saved data successfully.");
            res.send("Saved data.");
        }
    });
});

module.exports = router;