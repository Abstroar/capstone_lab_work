var express=require("express")
var app=express()
app.use(express.urlencoded({extended: false}))
app.set("view engine","ejs")
var session=require("express-session")
app.use(session({
    secret: "Abhilaksh",
    resave: false,
    saveUninitialized: false
}))
app.get("/",(req,res)=>{

    res.render("formdata")
})
app.get("/abc",(req,res)=>{
    data={
        name: req.session.name,
        age: req.session.age
    }
    res.render("show",data)
    // console.log(req.session)
    // res.send("wow")
})
app.post("/",(req,res)=>{
    console.log(req.body)
    req.session.name=req.body.t1
    req.session.age=req.body.t2
    console.log(req.session)
    res.send("Done")
})
app.listen(3006)