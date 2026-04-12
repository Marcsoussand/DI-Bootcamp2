const { readFile, writeFile } = require('./fileManager.js');

const content = readFile('./HelloWorld.txt');
console.log("Read from HelloWorld.txt:", content);

writeFile('./ByeWorld.txt', "Writing to the file");
console.log("Written to ByeWorld.txt successfully.");