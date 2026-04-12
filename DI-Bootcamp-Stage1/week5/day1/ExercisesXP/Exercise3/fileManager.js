const fs = require("fs");

function readFile(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, "utf-8");
}

module.exports = { readFile, writeFile };
