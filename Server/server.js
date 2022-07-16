const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Import Routes
app.use('/create', require('./routes/create'));
app.use('/fetch', require('./routes/fetch'));

// Connect to DB
mongoose.connect('mongodb://localhost/wordle',
                {useNewUrlParser: true},
                () => console.log("Connected to DB")
);

// http://172.16.2.30:8081/
app.listen(8081, "172.16.2.30", () => console.log("Server is running!"));