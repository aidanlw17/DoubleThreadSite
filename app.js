var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	expressSanitizer = require("express-sanitizer");

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/double_thread", { useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//MONGOOSE MODEL/CONFIG

//ROUTES (RESTful)

//HOME ROUTE
app.get("/", function(req, res){
	res.render("landing");
});

//ABOUT ROUTES
app.get("/about", function(req, res){
	res.render("about");
});

//COLLECTIONS ROUTES
app.get("/collections", function(req, res){
	res.render("collections");
});

//GRID ROUTES
app.get("/grid", function(req, res){
	res.render("grid");
});

//BLOG ROUTES
app.get("/blog", function(req, res){
	res.render("blog");
});

//AUTH ROUTES
app.get("/login", function(req, res){
	res.render("login");
});

app.get("/signup", function(req, res){
	res.render("signup");
});

app.listen(3000, "localhost", function(){
	console.log("Now serving DoubleThread on localhost port 3000");
});