const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
;

rl.question("Qual é o seu nome?",(name)=>{
    console.log("O nome do usuário é : "+name);
    rl.question("Qual é o seu Genero?",(gen)=>{
        console.log("O nome do usuário é"+name+" : seu Genero é "+gen);
    });
});

rl.on("close",()=>{
    console.log("adeus!");
    process.exit(0);
});


