// //index.js
// const http = require('http');
// // servidor node.js
// const fs = require('fs');

// const hostname = "127.0.0.1";
// const port = 8000;

// const server = http.createServer((req, res) => {


//     (async () => {
//         const db = require("./db");
//         console.log('Começou!');

//         console.log('SELECT * FROM CLIENTES');
//         const clientes = await db.selectCustomers();
//         console.log(clientes[0].nome);
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         // res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(JSON.stringify(clientes));
//         // res.write(clientes[0].nome);
//         return res.end();
//     })();



// })

// server.listen(port, hostname, () => {
//     console.log("servidor rodando")
// })

const express = require('express') //importacao do pacote
const app = express() //instanciando express
app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
    (async () => {
        const db = require("./db");
        console.log('Começou!');

        console.log('SELECT * FROM CLIENTES');
        const clientes = await db.selectCustomers();
        console.log(clientes[0].nome);
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write(JSON.stringify(clientes));
        const alunos = [
            {
              nome: 'Aluno1',
              idade: 12
            },
            {
              nome: 'Aluno2',
              idade: 13
            },
            {
              nome: 'Aluno3',
              idade: 14
            },
            {
              nome: 'Aluno4',
              idade: 15
            }
          ]
        res.send(clientes);
        // res.write(clientes[0].nome);
        return res.end();
    })();
    
})
app.listen(8000) //execucao do servidor
