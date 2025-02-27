# Steps for setting up ExpressJS
```
npm install express ejs
```
```
npm init
```
Make ```index.js```:
```
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('index'); // renders index.ejs
});

// Hello World Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

Change your scripts part in ```package.json``` as following:
```
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

make views folder in your directory and inside that make ```index.ejs```:
```
<!DOCTYPE html>
<html>
<head>
    <title>My Express App</title>
</head>
<body>
    <h1>Welcome to My Express App!</h1>
    <p>This is rendered using EJS.</p>
</body>
</html>
```

In terminal, run: 
```
npm start
```

Visit the following in your browser:
```
http://localhost:3000/
```
```
http://localhost:3000/home/
```
```
http://localhost:3000/about
```