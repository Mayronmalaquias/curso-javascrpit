function escreverNome(nome) {
    return "Meu nome é " + nome;
}

function verIdade(idade) {
    if (idade > 18) {
        console.log(escreverNome('miron ') + 'maior de idade')
    } else {
        console.log('menor de idade')
    }
}

(function() {
    const nome = 'Mayron'
    escreverNome(nome)
    verIdade(19)
})()