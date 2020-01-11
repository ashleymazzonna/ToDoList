//jshint esversion:6

const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");

const app = express();
app.set('view engine', 'ejs'); //tells the app to use ejs view engine - must be placed below the app const or it will not exist yet!!1 

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.sendFile(__dirname + "/weekend.html");
    } else {
        res.sendFile(__dirname + "/weekday.html");
    }

});

app.listen(3001, function () {
    console.log("server is running on port 3001");
});