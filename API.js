npm install --save express body-parser

var express = require("express")
var bodyParser = require("body-parser")

var ListaDAO = require("./ListaDAO")

var app = express();

app.use(bodyParser.json())

GET http://localhost:8080/lista { "nome" : }

app, listen(8080)