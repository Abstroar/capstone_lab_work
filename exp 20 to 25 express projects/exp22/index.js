var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res) => {
    res.render("form")
});
app.post('/', (req, res) => {
    const employeeData = req.body;
    // res.send({ data: employeeData });
    res.render('output',{data:employeeData})
});

app.listen(3000);
