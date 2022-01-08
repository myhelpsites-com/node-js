const fs = require('fs');

fs.readFile("gabriel.html", (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
});

server.listen(port, hostname, () => {
    console.log("servidor rodando")
})