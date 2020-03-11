"use strict";

var ip = "0.0.0.0"
var port = 3001

var express = require('express')
var app = express()

app.use((req,res,cont)=>{
   console.log(req.method+" request from: "+req.connection.remoteAddress+" for \""+req.originalUrl+"\"")
   cont()
})


/*  SEND TEXT AS ROOT */
app.get('/', function(req,res){
   res.end("SuperSimpleWallboardServer")
})


app.use(express.static('public'))


app.listen(port,ip)
console.log("Listening for web requests on "+ip+":"+port)