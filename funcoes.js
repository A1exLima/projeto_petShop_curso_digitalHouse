const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const { findSourceMap } = require('module');
const { indexOf } = require('./settings/servicos');

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

        let ultimoId = cachorros.splice(cachorros.indexOf(cachorros.length),1);
        
        let idRemover = ultimoId[0];

        let novoId = {id: idRemover.id + 1};

        const vacinasServicos = {"vacinas": [], "servicos":[]}

        let novoCachorro = {...novoId, ...respostasCachorros, ...vacinasServicos};

        cachorros.push(ultimoId[0]);
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
    },

    atribuirServico: (id, respostasServicos) => {

        let cachorroEncontrado = buscar(id);

        switch(cachorroEncontrado) {

            case undefined:
                
                console.log('Cachorro inexistente');
                break;
            
            default:

                let dataAtual = new Date();
                let novoServico = {

                    nome: respostasServicos,
                    data: `${dataAtual.getFullYear()}-${dataAtual.getMonth()}-${dataAtual.getDate()}`
                }

                cachorroEncontrado.servicos.push(novoServico);
                salvar();
        };
    },

    remover: (idCachorroParaRemover) => {

        let cachorroRemover = buscar(idCachorroParaRemover);

        switch(cachorroRemover) {

            case undefined:
                
                console.log('Cachorro inexistente');
                break;
            
            default:

                cachorros.splice(cachorros.indexOf(cachorroRemover),1);
                salvar();
        };
        
    }
}

module.exports = funcoes;