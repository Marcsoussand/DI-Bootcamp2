// ─── 1st Daily Challenge ───────────────────────────────────────────────────

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const allStrings = words.every(word => typeof word === 'string');
        if (allStrings) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject('Error: all items must be strings');
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.slice().sort());
        } else {
            reject('Error: array must have more than 4 words');
        }
    });
}

// catch executed (contains a number)
makeAllCaps([1, 'pear', 'banana'])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

// catch executed (only 3 words, not > 4)
makeAllCaps(['apple', 'pear', 'banana'])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

// resolves: uppercased + sorted
makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));


// ─── 2nd Daily Challenge ─────────────────────────────────────────────────────

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-..",
  "7": "--...",
  "8": "----..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--." ,
  ")": "-.--.-"
}`;

function toJs() {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (!morseJS || Object.keys(morseJS).length === 0) {
            reject('Error: morse object is empty');
        } else {
            resolve(morseJS);
        }
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const input = prompt('Enter a word or sentence to translate to Morse:');
        const chars = input.toLowerCase().split('');
        const translation = [];
        for (const char of chars) {
            if (char === ' ') continue;
            if (!(char in morseJS)) {
                reject(`Error: character "${char}" does not exist in morse code`);
                return;
            }
            translation.push(morseJS[char]);
        }
        resolve(translation);
    });
}

function joinWords(morseTranslation) {
    const output = morseTranslation.join('\n');
    document.getElementById('morse-output').innerText = output;
}

toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));
