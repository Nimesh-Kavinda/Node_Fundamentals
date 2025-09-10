function delayFn(time){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });

}


    async function delayGreet(name){
        await delayFn(2000);
        console.log(`Hello, ${name}`);
    }

    delayGreet('Nimesh');


    async function division(a, b){
       try{
              if(b === 0){
                   throw new Error("Division by zero is not allowed");
              }
              return a / b;
       } catch(err){
           console.log('Error:', err.message);
           return null;
       } 
        }

    async function performDivision(){
        const result1 = await division(10, 2);
        console.log('Result 1:', result1); // Should print 5

        const result2 = await division(10, 0);
        console.log('Result 2:', result2); // Should print null
    }
    performDivision();