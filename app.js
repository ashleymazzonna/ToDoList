//jshint esversion:6

const express = require('./node_modules/express');
const bodyParser = require("./node_modules/body-parser");

const app = express();

app.set('view engine', 'ejs'); //tells the app to use ejs view engine - must be placed below the app const or it will not exist yet!!1 
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));

var item;
var homeItems = ["Finish JS Course", "Finish SASS Course"];
var workItems = [];
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
            let item = document.querySelector('.listItem');
            let container = item.parentNode;
            container.removeChild(item);
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

// app.post('/work', function(req, res) {

//     let item = req.body.newItem;
//     workItems.push(homeItems);
//     res.redirect('/work');
// });



app.listen(3001, function () {
    console.log("server is running on port 3001");
});