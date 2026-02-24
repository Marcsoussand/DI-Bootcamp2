let words = prompt("Please enter multiple words separated by commas");

let arrayOfWords = words.split(",")

console.log(arrayOfWords);
let maxLength = 0;
let finalResult = ""
for(let word of arrayOfWords){
    if (word.length > maxLength){
        maxLength = word.length;
    }
}
finalResult += '*'.repeat(maxLength+4)
for (let word of arrayOfWords) {
    let n = maxLength-word.length
    finalResult += `\n* ${word}`+' '.repeat(n) +' *'
}
finalResult += "\n"+'*'.repeat(maxLength+4)
console.log(finalResult);
