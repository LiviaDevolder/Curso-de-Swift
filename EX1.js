var express = require("express")
var http = require("http")

var app = express

app.get("/user", function (request, response) {
    var options = {
        method: "GET",
        hostname: "api.myjson.com",
        path: "/bins/1ez5xx"
    }
    
    var getUser = http.request(options, function(res) {
        var body = ""
        response.setEnconding('utf8')
        res.on("data", function(chunk) {
            body += chunk
        })

        res.on("end", function() {
            response.json(JSON.parse(body))
            response.status(200).end()
        })
    })

    getUser.on('error', function(error) {
        response.write(error.message)
        response.status(404).end()
    })

    getUser.end()
})

app.listen(8080)