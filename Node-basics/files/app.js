// Read file

let fs = require('fs');

let readMe = fs.readFileSync('readme.txt', 'utf8');
console.log(readMe);


// Write file

fs.writeFileSync('writeme.txt', readMe);                // A file writeme is created.


// Read in asynchronous way

let readMe = fs.readFile('readme.txt',  'utf8', function(err, data){  
    if (err){
        console.error('There is an error', err);
        return;
    }       
    console.log(data);                                  // function(err, data) is the call back function.
});                                                  
                                                        // [NOTE]: Call back functions are used to tell the application 
                                                        //         that this perticular call back function is gonna run 
                                                        //         after completing the asynchronous task.









