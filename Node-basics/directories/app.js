let fs = require('fs');

fs.mkdir('newdir', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        if (err){
            console.error('There is an erreo', err);
            return;
        }
        fs.writeFileSync('./newdir/writedir.txt', data);
    })
})















