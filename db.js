async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    // const connection = await mysql.createConnection("mysql://u251004859_curso:Mig3x^hV[n0@185.201.11.233:3306/u251004859_curso");
    const connection = mysql.createConnection({
        host: "sql177.main-hosting.eu",// should be the same as bind-address
        user: "u251004859_curso",
        password: "Mig3x^hV[n0",
        database: "u251004859_curso"
      });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
	
async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}
 
module.exports = {selectCustomers}

