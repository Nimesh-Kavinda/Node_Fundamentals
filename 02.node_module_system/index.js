// module.exports ->  export
//require -> import

const firstmodule = require('./first-module');

console.log(firstmodule.add(5, 3));
console.log(firstmodule.substract(20, 5));


try {
    console.log('trying to Divide by Zero');
    let result = firstmodule.divide(10, 0);
    console.log(result);
} catch (error) {
    console.log(error.message);
}

// module warapper
//  (
//     function (exports, require, module, __filename, __dirname){
//         // your modeule code actually lives in here
//     }
//  )