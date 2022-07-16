const express = require('express');
const router = express.Router();

const Game = require('../models/gameSchema');

//Fetch all games.
// http://172.16.2.30:8081/fetch
router.get("/", (req, res) => {
    Game.find({}).then((data) => {
        res.send(data);
    });
});

module.exports = router;