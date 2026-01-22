const fs = require("fs");
function WordCount(){
    const data = fs.readFileSync("readfile.txt","utf-8");
    const words = data.trim().split(/\s+/);
    const count = words.length;

    fs.writeFileSync("output.txt",`${count}`);
}
module.exports = {WordCount};