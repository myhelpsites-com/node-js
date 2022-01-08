const http = require('http');
// servidor node.js
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    // let newU = new URL(req.url, `http://${req.headers.host}`);
    // console.log(newU.origin + newU.)
    console.log(req.url.split("."));
    if (req.url.split(".")[1] == "css" || req.url.split(".")[1] == "js") {
        console.log("css")
    }else{
        console.log(`mysite${req.url.split(".")[0]}.html`);
        fs.readFile(`mysite${req.url.split(".")[0]}.html`, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    
})

// exclui
// fs.unlink("erro.html", () => {
//     console.log("arquivo excluido");
// })

// renomeia
// fs.rename("index.html", "index2.html", () => {

// // })

server.listen(port, hostname, () => {
    console.log("servidor rodando")
})
