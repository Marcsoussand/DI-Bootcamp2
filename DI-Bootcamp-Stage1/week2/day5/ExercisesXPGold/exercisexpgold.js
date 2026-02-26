let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

console.log(landscape())

//I expect to see ____/''''\____
//4times a _ then / and 4 times a ', then a \ with an escape, so might be only one. 


//Exercise 2:
//Outcome should be 13
const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3));

//Exercise 3
// result 31 
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1));

//Exercise 4
//result 17
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
console.log(add5(12));

//Exercise 5 
//Result 16
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add51 = (num) => num + 5;
console.log(compose(add1, add51)(10));

//Exercise Ninja
function mergeWords(word) {
    const words = [word];

    function merge(nextWord) {
        if (nextWord === undefined) {
            return words.join(" ");
        }
        words.push(nextWord);
        return merge;
    }

    return merge;
}
console.log(mergeWords('There')('is')('no')('spoon.')());
// should return 'There is no spoon.'