const _ = require('lodash');
const { add, multiply } = require('./math.js');

const numbers = [5, 10, 15, 20, 25];

console.log("--- Custom math module ---");
console.log("add(7, 3) =", add(7, 3));
console.log("multiply(6, 4) =", multiply(6, 4));

console.log("\n--- Lodash utilities ---");
console.log("_.sum([5,10,15,20,25]) =", _.sum(numbers));
console.log("_.mean([5,10,15,20,25]) =", _.mean(numbers));
console.log("_.max([5,10,15,20,25]) =", _.max(numbers));
console.log("_.min([5,10,15,20,25]) =", _.min(numbers));

console.log("\n--- Combined ---");
const doubled = _.map(numbers, n => multiply(n, 2));
console.log("Each number multiplied by 2:", doubled);
console.log("Sum of doubled numbers:", _.sum(doubled));
