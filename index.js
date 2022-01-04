//variables
var express = require("express")

var ruta = require("./back-end/router/router.js")
var app = express()
app.set("port",3000||process.env.PORT)
//middleware
app.use(express.static("./front-end"))
app.use(ruta)

//servidor
app.listen(app.get("port"),function(req,res,next){
console.log("se esta escuchando en el puerto "+app.get("port"))
})