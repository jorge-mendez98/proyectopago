//variables
var express = require("express")
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

var ruta = require("./router/router.js")
var app = express()
app.set("port",3000||process.env.PORT)
//middleware
app.use(express.static("../front-end"))
app.use(ruta)

//servidor
app.listen(app.get("port"),function(req,res,next){
console.log("se esta escuchando en el puerto "+app.get("port"))
})