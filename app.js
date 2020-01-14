//jshint esversion:6

const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");

const app = express();

app.set('view engine', 'ejs'); //tells the app to use ejs view engine - must be placed below the app const or it will not exist yet!!1 
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

var item;
var homeItems = ["Finish JS Course", "Finish SASS Course"];
var workItems = [];
// var listsType = ["Home List", "Work List"];
var today = new Date();
var currentDay = today.getDay();
var day = '';
var name = 'Ashley';

var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

var day = today.toLocaleDateString("en-US", options);

const clearArrs = (arr) => {
    if (arr.length > 10) {
        arr.shift()
    }  else {
        arr.push(item);
    }
};

const deleteBtn = () => {
    let checkbox = document.querySelector('input[type="checkbox"]');
    let clearBtn = document.querySelector('.clear');

    clearBtn.addEventListener('click', function(event) {
        if (checkbox) {
            let listItem = document.querySelector('.listItem');
            let container = listItem.parentNode;
            container.removeChild(listItem);
        }

    });
};

app.get("/", function (req, res) {
    res.render("lists", { 
        kindOfDay: day, 
        listsType: 'Home List', 
        userName: name, 
        newListItems: homeItems, 

    });
});

app.post("/", function (req, res) {
    item = req.body.newItem;
    console.log(item);
    if (req.body.list === "Work List") {

        clearArrs(workItems);
        res.redirect('/work');

        
    } else {
        clearArrs(homeItems);
        // homeItems.push(item);
        res.redirect("/");
    }
});

app.get('/work', function(req, res) {
    res.render('lists', { 
        kindOfDay: day, 
        listsType: "Work List",
        userName: name,        
        newListItems: workItems });

});

app.post('/profile', function(req, res) {
    console.log(req.body);
    res.send("Success");

    // let item = req.body.newItem;
    // workItems.push(homeItems);
    // res.redirect('/work');
});



app.listen(3001, function () {
    console.log("server is running on port 3001");
});