let http = require('http');
let util = require('util');
let url = require('url');
let os = require('os');

let server = http.createServer();
server.on('request', (req, res) => {
    let requrl = url.parse(req.url, true);
    if(requrl.pathname === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><head><title>Hello, World</title></head></html>');
    }
    else if(requrl.pathname === "/osinfo"){
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.end(
            'Hello os'
         );
    }
});
server.listen(8124, '127.0.0.1');
console.log('Listening to http://localhost:8124');


































