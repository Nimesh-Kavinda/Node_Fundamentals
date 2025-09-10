function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('Promiose Started');

delayFn(3000).then(() => {
    console.log('3 seconds later');
});


console.log('Promise Ended');


function divide(num1, num2){
    return new Promise((resolve, reject) => {
        if(num2 === 0){
            reject('Cannot divide by zero');
        } else {
            resolve(num1 / num2);
        }
    }); 
}

divide(10, 0).then(result => {
    console.log('Result:', result);
}).catch(error => {
    console.error('Error:', error);
});