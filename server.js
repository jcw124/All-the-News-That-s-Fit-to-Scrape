// Dependencies
const EXPRESS = require("express");
const MONGOJS = require("mongojs");
// Require request and cheerio. This makes the scraping possible
const REQUEST = require("request");
const CHEERIO = require("cheerio");
//Require handlebars

//require body parser

//require mongoose

// Initialize Express
const APP = express();

// Database configuration
const DATABASEURL  = "News";
const COLLECTIONS = [Articles];

// Hook mongojs configuration to the db variable
var db = mongojs(DATABASEURL, COLLECTIONS);
db.on("error", function(error) {
  console.log("Database Error:", error);
});




// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });
  