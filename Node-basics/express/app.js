// let express = require('express');

// let app = express();

// app.get('/api/users', function(req, res) {
//     var user_id = req.param('id');
//     var token = req.param('token');
//     var geo = req.param('geo');  

//     res.send(user_id + ' ' + token + ' ' + geo);
// });


// app.listen(8000);





// Templates


let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/profile/:name', function(req, res){
    res.render('profile', {person: req.params.name});
});

app.listen(8000);
console.log('listening to port http://127.0.0.1:8000');


// middleware is the code that runs between the request and the response.




















