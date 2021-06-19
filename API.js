npm install express --save

var express = require("express")

var app = express()

app.get("/teste", function(request, response){
    console.log("Rota /teste acessada com sucesso!")
})

app.listen(8080)