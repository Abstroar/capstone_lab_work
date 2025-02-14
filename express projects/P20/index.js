var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});
app.get("/", function(req,res){
   res.send("what is there are 2 for one loc");
});

app.get("/ab",function(req,res){
   res.send("this is another test");
});
app.get("/test",function(req,res){
   res.send("this is another test for test url");
});
app.listen(3010);

