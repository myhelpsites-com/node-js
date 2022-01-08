const http = require('http');
// servidor node.js
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

fs.readFile("gabriel.html", (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
});

server.listen(port, hostname, () => {
    console.log("servidor rodando")
})