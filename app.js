//jshint esversion:6

const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");

const app = express();
app.set('view engine', 'ejs'); //tells the app to use ejs view engine - must be placed below the app const or it will not exist yet!!1 

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = '';
    var name = 'Ashley';

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;    
        default:
            console.log("Error: Current day is equal to: " + currentDay)
    }

    res.render("lists", { kindOfDay: day, name: name });

});

app.listen(3001, function () {
    console.log("server is running on port 3001");
});