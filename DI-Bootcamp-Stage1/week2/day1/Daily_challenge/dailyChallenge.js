let sentence = "The movie is not that bad, I like it"
// let sentence = 'This movie is not so bad !' 
// let sentence = 'This dinner is bad !' 

let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")
if (wordNot >= 0 && wordBad >=0 && wordNot < wordBad) {
    sentence = sentence.slice(0,wordNot) + "good" + sentence.slice(wordBad+3)
}
console.log(sentence)