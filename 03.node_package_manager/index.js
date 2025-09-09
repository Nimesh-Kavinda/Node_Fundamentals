const lodash = require('lodash');

const names = ['alice', 'bob', 'charlie', 'nimesh'];

const capitalize = lodash.map(names, (name) => lodash.capitalize(name));

console.log(capitalize);