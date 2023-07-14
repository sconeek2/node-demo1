// Load lodash using require)_
let lodash = require("lodash");

let name = "brittany spears";
console.log("Name: " + name);

// call the upperFirst() function in lodash to convert the first letter of the string to uppercase
name = lodash.snakeCase(name);
console.log("Revised name: " + name);