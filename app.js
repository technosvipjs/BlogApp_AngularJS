// required modules
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// load posts router
var posts = require("./routers/posts");

// load app settings
var appSettings = require("./appSettings");

// creating an application
var app = express();

// serving static files
app.use(express.static(__dirname + "/public"));

// using middleware
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(appSettings.apiBaseUrl, posts);

// running server
app.listen(appSettings.port);