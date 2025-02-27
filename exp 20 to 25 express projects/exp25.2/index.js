var express=require("express")
var app=express()
var session = require('express-session');
app.use(session({
    secret: 'abhilaksh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 10000,
    }
  }))
  app.get("/",(req,res)=>{
    res.send(req.sessionID+"<br>")
  })
  app.listen(3000)