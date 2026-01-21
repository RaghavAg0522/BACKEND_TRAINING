const fs = require("fs");
function WordCount(){
    fs.readFileSync("readfile.txt","UTF-8",(err,data)=>{
        if(err)throw err
            let word = data.split(" ");
            let count = word.length;
            fs.writeFile("output.txt",`${count}`);
    });
}
module.exports = {WordCount};