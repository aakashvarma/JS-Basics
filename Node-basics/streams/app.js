// Streams
// Writable stream - allows node js to write data to a stream
// Readable stream - allows node js to read from a stream
// Duplex - can read and write to a stream


// Readable stream example
let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); 

// createReadStream inherits from an event emitter called 'data'

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
});

// Writable stream example

let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); 
let myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk added');
    myWriteStream.write(chunk);
});

// Pipes - can read and write without writing the code separately.

let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); 
let myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.pipe(myWriteStream);

// To write the data to a client

let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
    res.writeHead(200, 'Content-Type': 'text/html');
    
})

















