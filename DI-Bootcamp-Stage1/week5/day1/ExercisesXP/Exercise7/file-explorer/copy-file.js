const fs = require('fs');

const content = fs.readFileSync('./source.txt', 'utf-8');
fs.writeFileSync('./destination.txt', content, 'utf-8');
console.log('Content copied from source.txt to destination.txt successfully.');
