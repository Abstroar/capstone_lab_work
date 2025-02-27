const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 


mongoose.connect("mongodb://localhost:27017/authApp");


const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  username: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);


app.get("/signup", (req, res) => {
  res.render("signup");
});


app.post("/signup", async (req, res) => {
  const { name, age, username, password } = req.body;

  try {
    const newUser = new User({ name, age, username, password });
    await newUser.save();
    res.redirect("/login");
  } catch (err) {
    if (err.code === 11000) {
      res.send("Username already exists. Please try another.");
    } else {
      res.send("Error signing up. Please try again.");
    }
  }
});


app.get("/login", (req, res) => {
  res.render("login");
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {

    const user = await User.findOne({ username, password });
    if (user) {
      res.render("welcome", { username: user.name });
    } else {
      res.send("Invalid credentials. Please try again.");
    }
  } catch (err) {
    res.send("Error logging in. Please try again.");
  }
});


app.get("/logout", (req, res) => {
  res.redirect("/signup");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
