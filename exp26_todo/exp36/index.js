var express=require("express")
var app=express()

app.set("view engine","ejs")
app.use(express.urlencoded({extended: false}))
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');
var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var Person = mongoose.model("Person", personSchema);
app.get("/",(req,res)=>{
    res.render("formdata")
})
app.post("/",(req,res)=>{
    var personInfo=req.body
    console.log(req.body)
    if(!personInfo.t1 || !personInfo.t2 || !personInfo.t3 )
        res.send("Data Input Error")
    else{
        console.log("Data Ok")
        var newPerson = new Person({
            name: personInfo.t1,
            age: personInfo.t2,
            nationality: personInfo.t3
         });
         console.log("Before save")
         newPerson.save(function(err, Person){
            if(err)
               res.send("Error in saving in DB");
            else
            res.send("Data Saved successfully");
         });
         console.log("After save")
    }
    res.send("Data Received")
})
app.listen(3000)