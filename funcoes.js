const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const { findSourceMap } = require('module');

function salvar(){

    fs.writeFileSync(__dirname + '/database/cachorros.json',JSON.stringify(cachorros, null, 4));
}

function buscar(id){

    let cachorrosId = cachorros.find(cachorros => cachorros.id == id);
    
    return cachorrosId == undefined ? console.log(`Não existe cachorro com o Id: ${id}`) : console.log(cachorrosId);
}

let funcoes = {

    listar: () => {

        console.table(cachorros);
    },
    
    descrever: (id) => {

        buscar(id);
    },
    
    adicionar: (respostasCachorros) => {
        
        let novoId = {id: cachorros.length+1};
        const vacinasServicos = {"vacinas": [], "servicos":[]}

        let novoCachorro = {...novoId, ...respostasCachorros, ...vacinasServicos};

        cachorros.push(novoCachorro);
        salvar();        
    }
}

module.exports = funcoes;