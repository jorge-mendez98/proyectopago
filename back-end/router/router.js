var express = require("express")
var rutas =  express.Router()
rutas.get("/",function(req,res,next){
  res.render("index.html")
})
module.exports = rutas