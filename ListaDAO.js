function ListaDAO() {
    this.listas = {}
    this.criarLista = function(nome) {
        var novoID = "lista-" + Object.keys(this.listas).length
        var novaLista = {
            id: novoID,
            nome: nome,
            tarefas: [],
            numeroDeTarefas: 0
        }
        this.listas[novoID] = novaLista

        return {
            success: true,
            message: "Lista \'" + nome + "\' criada."
        }
    }
    this.renomearLista = function(listaID, novoNome) {
        if (this.listas.hasOwnProperty(listaID)) {
            this.listas[listaID].nome = novoNome
            console.log()
            return {
                success: true,
                message: "Lista renomeada para \'" + novoNome + "\'."
            }
        } else {
            return {
                success: false,
                message: "Lista não pode ser encontrada."
            }
        }
    }
    this.apagarLista = function(listaID) {
        if (this.listas.hasOwnProperty(listaID)) {
            var nomeDaLista = this.listas[listaID].nome
            delete this.listas[listaID]
            return {
                success: true,
                message: "Lista \'" + nomeDaLista + "\' apagada com sucesso."
            }
        } else {
            return {
                success: false,
                message: "Lista não pode ser encontrada."
            }
        }
    }
    this.getListas = function() {
        return this.listas
    }
    this.novaTarefa = function(descricao, listaID) {
        var idTarefa = "tarefa-" + this. listas[listaID].numeroDeTarefas
        var tarefa = {
            id: idTarefa,
            descricao: descricao,
            completa: false
        }
        this.listas[listaID].tarefas.push(tarefa)
        this.listas[listaID].numeroDeTarefas += 1
        return {
            success: true,
            message: "Tarefa adicionada na lista " + this.listas[listaID].nome
        }
    }
    this.toggleTarefa = function(listaID, tarefaID) {
        for (var i = 0; i < this.listas[listaID].tarefas.length; i++) {
            if (this.listas[listaID].tarefas[i].id == tarefaID) {
                this.listas[listaID].tarefas[i].completa = !this.listas[listaID].completa
                return {
                    success: true,
                    message: "Tarefa \'" + tarefaID + "\': " + this.listas[listaID].tarefas[i].completa
                }
            }
            return {
                success: false,
                message: "Tarefa \'" + tarefaID + "\' não encontrada"
            }
        }
    }
    this.apagarTarefa = function(listaID, tarefaID) {
        for (var i = 0; i < this.listas[listaID].tarefas.length; i++) {
            if (this.listas[listaID].tarefas[i].id == tarefaID) {
                this.listas[listaID].tarefas.splice(i, 1)
                console.log("ListaDAO: Tarefa \'%s\' apagada com sucesso.", tarefaID)
                break;
            }
        }
    }
    this.getTarefas = function(listaID) {
        return this.listas[listaID].tarefas
    }
}

module.exports = new ListaDAO();