var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var session = require("express-session");
var cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());

app.use(
  session({
    secret: "s-secret",
    resave: false,
    saveUninitialized: false,
  }));

var Users = [];


function checkSignIn(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

// Signup Route
app.get("/signup", function (req, res) {
  res.render("signup", { message: null });
});

app.post("/signup", function (req, res) {
  if (!req.body.id || !req.body.password) {
    return res.status(400).send("Invalid details!");
  }

  var userExists = Users.some((user) => user.id === req.body.id);

  if (userExists) {
    return res.render("signup", {
      message: "User Already Exists! Login or choose another user ID",
    });
  }

  var newUser = { id: req.body.id, password: req.body.password };
  Users.push(newUser);
  req.session.user = newUser;
  res.redirect("/protected_page");
});


app.get("/protected_page", checkSignIn, function (req, res) {
  res.render("welcome", { id: req.session.user.id });
});


app.get("/login", function (req, res) {
  res.render("login", { message: null });
});

app.post("/login", function (req, res) {
  if (!req.body.id || !req.body.password) {
    return res.render("login", { message: "Please enter both ID and password" });
  }

  var user = Users.find(
    (user) => user.id === req.body.id && user.password === req.body.password
  );

  if (user) {
    req.session.user = user;
    return res.redirect("/protected_page");
  }

  console.log("Invalid login attempt:", req.body);
  res.render("login", { message: "Invalid credentials!" });
});


app.get("/logout", function (req, res) {
  req.session.destroy(function () {
    console.log("User logged out.");
  });
  res.redirect("/login");
});

app.get("/protected_page", checkSignIn, function (req, res) {
  res.render("welcome", { id: req.session.user.id });
});


app.listen(3025, () => console.log("Server running on port 3025"));
