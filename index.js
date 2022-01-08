const express = require('express') //importacao do pacote
const app = express() //instanciando express
app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
    (async () => {
        const db = require("./db");
        console.log('Começou!');

        console.log('SELECT * FROM CLIENTES');
        const clientes = await db.selectCustomers();
        console.log(clientes[0].nome);
        // res.writeHead(200);
        // res.writeHead(200, { 'Content-Type': 'text/plain' });
        // res.write(JSON.stringify(clientes));
        
        res.send(clientes);
        // res.write(clientes[0].nome);
        return res.end();
    })();
    
})
app.listen(8000) //execucao do servidor
