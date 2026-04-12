const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir);

console.log(`Files in "${path.resolve(dir)}":`);
files.forEach(file => console.log(' -', file));
