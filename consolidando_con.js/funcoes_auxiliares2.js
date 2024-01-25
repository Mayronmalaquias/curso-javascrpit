const entradas = [5, 1, 2, 6, 4, 10];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { 
    gets,
    print
}

