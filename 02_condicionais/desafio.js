const Preco_Etanol = 5.79;
const Preco_Gasolina = 6.66;
const tipo_combustivel = 'etanol';
const gasto_medio = 10;
const distancia = 100;

if (tipo_combustivel == 'gasolina') {
    const valor_gasto = (distancia / gasto_medio) * Preco_Gasolina;
    console.log(valor_gasto.toFixed(2));
} else if (tipo_combustivel == 'etanol') {
    const valor_gasto = (distancia / gasto_medio) * Preco_Etanol;
    console.log(valor_gasto.toFixed(2));
} else {
    console.log ('valor invalido!');
}