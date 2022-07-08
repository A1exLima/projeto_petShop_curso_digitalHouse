const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const { findSourceMap } = require('module');

function salvar(){

    fs.writeFileSync(__dirname + '/database/cachorros.json',JSON.stringify(cachorros, null, 4));
}

function buscar(id){

    let cachorrosId = cachorros.find(cachorros => cachorros.id == id);
    cachorrosId == undefined ? console.log("Erro: ID CACHORRO NÃO ENCONTRADO") : console.log(cachorrosId);
}



let funcoes = {

    listar: () => {


    },
    
    descrever: () => {
        

    },
    
}


module.exports = funcoes;
