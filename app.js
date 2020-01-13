//jshint esversion:6
const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");

const app = express();

app.set('view engine', 'ejs'); //tells the app to use ejs view engine - must be placed below the app const or it will not exist yet!!1 
app.use(bodyParser.urlencoded({extended: true }));

var item;
var items = ["Finish JS Course", "Finish SASS Course"];

app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = '';
    var name = 'Ashley';

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long" };

    var day = today.toLocaleDateString("en-US", options);

    res.render("lists", { 
        kindOfDay: day,
        userName: name, 
        newListItems: items 
    });

});

app.post("/", function(req, res) {
    item = req.body.newItem;

    items.push(item);

    // console.log(item);

    res.redirect("/");
});



app.listen(3001, function () {
    console.log("server is running on port 3001");
});