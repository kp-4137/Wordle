const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Data = require('./gameSchema');

mongoose.connect('mongodb://localhost/wordle');

mongoose.connection
.once("open", () => {
    console.log("Connected to DB");
})
.on("error", (error) => {
    console.log("Failed to connect to the DB" + error);
});

//Create a new game.
// http://172.16.2.30:8081/create
app.post("/create", (req, res) => {
    const game = new Data({
        answer: req.get("answer"),
        guesses: req.get("guesses"),
        status: req.get("status")
    });

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