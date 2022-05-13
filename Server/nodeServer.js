const http = require('http')
const fs = require('fs')
const port = 3000
const server = http.createServer(function( req, res ){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('../Client/index.html', function(error, data) {
        if(error) {
            res.writeHead(404)
            res.write('Error: file not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if(error) {
        console.log("Something went wrong.", error)

    } else {
        console.log('NodeServer is listening on port http://localhost:3000')
    }
})