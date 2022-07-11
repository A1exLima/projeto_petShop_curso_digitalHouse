const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const { findSourceMap } = require('module');

function salvar(){

    fs.writeFileSync(__dirname + '/database/cachorros.json',JSON.stringify(cachorros, null, 4));
}

function buscar(id){

    let cachorrosId = cachorros.find(cachorros => cachorros.id == id);
    
    return cachorrosId == undefined ? console.log(`ERRO: Não existe cachorro com o Id: ${id}`) : cachorrosId;
}

let funcoes = {

    listar: () => {

        console.table(cachorros);
    },
    

    descrever: (id) => {

        switch(buscar(id)) {

            case undefined:
                break;

            default:
                console.log(buscar(id));
        }
    },
    

    adicionar: (respostasCachorros) => {
        
        let novoId = {id: cachorros.length+1};
        const vacinasServicos = {"vacinas": [], "servicos":[]}

        let novoCachorro = {...novoId, ...respostasCachorros, ...vacinasServicos};

        cachorros.push(novoCachorro);
        salvar();        
    },

    vacinar: (id, respostasVacinas) => {

        let cachorroEncontrado = buscar(id);

        switch(cachorroEncontrado) {

            case undefined:
               
                console.log('Cachorro inexistente');
                break;
            
            default:

                let dataAtual = new Date();
                let novaVacina = {
            
                    nome: respostasVacinas,
                    data: `${dataAtual.getFullYear()}-${dataAtual.getMonth()}-${dataAtual.getDate()}`
                }
                
                cachorroEncontrado.vacinas.push(novaVacina);
                salvar();
        };
        
        

    }
    
}

module.exports = funcoes;