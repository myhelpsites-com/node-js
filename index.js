const fs = require('fs');

fs.readFile("mysite/gabriel.html", (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
})