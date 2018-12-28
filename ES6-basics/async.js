console.log('person 1: Shows the ticket.')
console.log('person 2: Shows the ticket.')

const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

promiseWifeBringingTicket.then((t) => {
    console.log(`person 3: Shows the ${t}.`);
});

console.log('person 4: Shows the ticket.')
console.log('person 5: Shows the ticket.')
























