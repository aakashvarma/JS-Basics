// let http = require('http');
// let fs = require('fs');

// let server = http.createServer((req, res) => {
//     console.log('require was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('listening to port: http://127.0.0.1:3000');


// json 

// let http = require('http');
// let fs = require('fs');

// let server = http.createServer((req, res) => {
//     console.log('require was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     let myObj = {
//         name: 'Varma',
//         job: 'student',
//         age: 21
//     };
//     res.end(JSON.stringify(myObj));
    
// });

// server.listen(3000, '127.0.0.1');
// console.log('listening to port: http://127.0.0.1:3000');


// Basic Routing

let http = require('http');
let fs = require('fs');
let express = require('express');

let server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/api/aakash'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let myObj = {
            name: 'Aakash Varma',
            sex: 'Male',
            age: 21,
            occupation: 'student'
        };
        res.end(JSON.stringify(myObj));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("OOPS!! This page doesnot exist.");
    }
});

server.listen(3000, '127.0.0.1');
console.log('listening to http://127.0.0.1:3000');

















