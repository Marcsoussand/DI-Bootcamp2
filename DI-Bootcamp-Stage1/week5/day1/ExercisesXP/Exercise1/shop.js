const arrayOfObjects = require("./product.js");

function productName(nameObj) {
    return arrayOfObjects.find(obj => obj.name === nameObj);
}

console.log(productName("salt"));
console.log(productName("water"));
console.log(productName("orange"));

