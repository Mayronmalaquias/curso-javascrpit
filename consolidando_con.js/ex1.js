const {gets, print} = require('./funcoes.auxiliares1');

function definirAprovacao (numero) {
    if (numero >= 0 && numero < 5) {
        return 'Reprovado'
    } else if (numero < 7) {
        return 'Recuperacao'
    } else if (numero <= 10){
        return 'Aprovado'
    } else {
        return'valor invalido'
    }
}

(function (){
    print(definirAprovacao(gets()))
})()