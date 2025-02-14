const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('index'); 
});


app.get('/', (req, res) => {
  res.render('one');
});


app.get('/about', (req, res) => {
    res.send('This is the About Page');
});
app.get('/form', (req, res) => {
  res.render('form');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});