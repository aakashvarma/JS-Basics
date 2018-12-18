// Streams
// Writable stream - allows node js to write data to a stream
// Readable stream - allows node js to read from a stream
// Duplex - can read and write to a stream

let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
});
























