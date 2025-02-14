var express = require("express")
var app=express()
var cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("formdisp")
})
app.post("/",(req,res)=>{
    res.cookie("nm",req.body.t1,{maxAge: 10000})
    res.cookie("age",req.body.t2)
    res.send("<h1>Done</h1>")

})
app.get("/abc",(req,res)=>{
    data={
        name: req.cookies.nm,
        age: req.cookies.age
    }
    res.render("showdata",data)
    // console.log("one")
    // console.log(req.cookies)
    // console.log(req.cookies.nm)
    // console.log(req.cookies.age)
    
    // res.send("<h1>Ok</h1>")
})
app.listen(3001)