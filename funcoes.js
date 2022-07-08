const cachorros = require('./database/cachorros.json');
const fs = require('fs');

function salvar(){

    fs.writeFileSync(__dirname + '/database/cachorros.json',JSON.stringify(cachorros, null, 4));
}

function buscar(id){}

let funcoes = {

    
}


module.exports = funcoes;