const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const Game = require('./gameSchema');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/wordle',
                {useNewUrlParser: true},
                () => console.log("Connected to DB")
);

//Create a new game.
// http://172.16.2.30:8081/create
app.post("/create", (req, res) => {
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

// http://172.16.2.30:8081/
const server = app.listen(8081, "172.16.2.30", () => {
    console.log("Server is running!");
});