const http = require('http');
// servidor node.js
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;


// Criar novo arquivo
// fs.writeFile('gabriel.html','<h1>Hello World!</h1>', function(err){
//     if(err) throw err;
//     console.log("criou");
// });

// Cria ou adiciona no atual
fs.appendFile("gabriel.html","\n teste", (err) =>{
    if(err) throw err;
console.log("foi com sucesso");
})


const server = http.createServer((req, res) => {
    if (req.url == '/hello') {
        fs.readFile("index.html", function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }else{
        fs.readFile("erro.html", function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });

    }
})

server.listen(port, hostname, () => {
    console.log("servidor rodando")
})