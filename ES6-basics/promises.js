// let promiseToCleanTheRoom = new Promise(function(resolve, reject){
//     let isClean = true;

//     if(isClean){
//         resolve('clean');
//     }else{
//         reject('not clean');
//     }
// });


// promiseToCleanTheRoom.then(function(fromResolve){
//     console.log('this room is' + fromResolve);
// }).catch(function(fromReject){
//     console.log('this room is' + fromReject);
// });

// asynchronous coding with promises.

let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve('Cleaned room')
    })
}
let removeGarbage = function(){
    return new Promise(function(resolve, reject){
        resolve('Garbage removed')
    })
}

cleanRoom().then(function(result){
    console.log(result);
    return removeGarbage();
}).then(function(result){
    console.log(result);
});



















