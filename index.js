const fs = require('fs');

// teste
fs.readFile("teste/gabriel.html",(err, data) =>{
console.log(data.toString())
let str = data.toString();
// let newStr = str.split("/");
// let newStr = str.substr(13,4)

console.log(newStr);
}) 