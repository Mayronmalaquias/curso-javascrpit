const {gets, print} = require('./funcoes_auxiliares');

function compararAlunos(a1, a2, a3, a4, a5) {
    const listaNumero = [a1,a2,a3,a4,a5];
    let numero = 0;
    for(let i = 0; i <= listaNumero.length;  i++) {
        if (numero < listaNumero[i]) {
            numero = listaNumero[i];
        }
    }
    return numero;
}


(function (){
    const aluno1 = gets();
    const aluno2 = gets();
    const aluno3 = gets();
    const aluno4 = gets();
    const aluno5 = gets();

    print(compararAlunos(aluno1, aluno2, aluno3, aluno4, aluno5));
})();