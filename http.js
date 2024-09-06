const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write('<h1> Home Page</h1>')
        res.end()
    } else if (req.url === '/about'){
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write('<h1> About Page</h1>')
        res.end()
    } else if (req.url === '/contact'){
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write('<h1> contact Page</h1>')
        res.end()
    } else {
        res.writeHead(404, {'content-Type': 'text/html'})
        res.end('error')
    }
}) 

server.listen(5173, () => {
    console.log('app listening on port 5173')
})