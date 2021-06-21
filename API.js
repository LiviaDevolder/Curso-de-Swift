var express = require("express")
var bodyParser = require("body-parser")
var ListaDAO = require("./listaDAO")
var app = express()

app.use(bodyParser.json())

app.post("/lista", function(request, response){
    var nome = request.body.nome
    var result = ListaDAO.criarLista(nome)

    response.status(200)
    response.json(result)
    response.end()
})

app.put("/lista/:id_lista", function(request, response) {
    var novoNome = request.body.nome
    var idDaLista = request.params.id_lista
    var result = ListaDAO.renomearLista(idDaLista, novoNome)
    response.status(200)
    response.json(result)
    response.end()
})

app.delete("/lista/:id_lista", function(request, response) {
    var idDaLista = request.params.id_lista
    var result = ListaDAO.apagarLista(idDaLista)
    response.status(200)
    response.json(result)
    response.end()
})

app.get("/lista", function(request, response) {
    response.status(200)
    response.json(ListaDAO.getListas())
    response.end()
})

app.post("/lista/:id_lista", function(request, response) {
    var idDaLista = request.params.id_lista
    var descricaoDaTarefa = request.body.descricaoDaTarefa
    var result = ListaDAO.novaTarefa(descricaoDaTarefa, idDaLista)
    response.status(200)
    response.json(result)
    response.end()
})

app.put('/lista/:id_lista/tarefa/:id_tarefa', function(request, response) {
    var idDaLista = request.params.id_lista
    var idDaTarefa = request.params.id_tarefa
    var result = ListaDAO.toggleTarefa(idDaLista, idDaTarefa)
    response.status(200)
    response.json(result)
    response.end()
})

app.delete("/lista/:id_lista/tarefa/:id_tarefa", function(request, response) {
    var idDaLista = request.params.id_lista
    var idDaTarefa = request.params.id_tarefa
    var result = ListaDAO.apagarTarefa(idDaLista, idDaTarefa)
    response.status(200)
    response.json(result)
    response.end()
})

app.get("/lista/:id_lista/tarefa", function(request, response) {
    var idDaLista = request.params.id_lista
    response.status(200)
    response.json(ListaDAO.getTarefas(isDaLista))
    response.end()
})

app.listen(8080)