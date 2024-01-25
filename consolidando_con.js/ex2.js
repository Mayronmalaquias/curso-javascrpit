const {gets, print} = require('./funcoes_auxiliares2')

function definirMaiorPar(lista) {
    let numeroPar = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0 && numeroPar < lista[i]) {
            numeroPar = lista[i];
        } 
    }
    return numeroPar;
}

function definirMenorImpar(lista) {
    let numeroImpar = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] % 2 === 1 && numeroImpar > lista[i]) {
            numeroImpar = lista[i];
        }
    }
    return numeroImpar;
}

(function() {
    let entrada = []
    for(let i = 0; i < 6; i++) {
        entrada.push(gets())
    }
    print('Maior par: ' + definirMaiorPar(entrada))
    print('Menor impar: ' + definirMenorImpar(entrada))
})()