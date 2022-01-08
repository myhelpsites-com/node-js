const express = require('express') //importacao do pacote
const app = express() //instanciando express
app.get('/api/cursos', function (req, res) { //endereco da requisicao onde e retornado hello world
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




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
