var express = require("express")
var app = express()

app.get("agenda", function(request, response) {
    console.log("Rota /agenda acessada com sucesso!")
})

app.listen(8000)