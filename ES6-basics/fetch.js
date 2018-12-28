let fetch = require('node-fetch');

let url = 'https://randomuser.me/api/?results=10'

fetch(url)
    .then(function(data){
        console.log(data.json);
    })
    .catch(function(err){
        console.log(err);
    });





























