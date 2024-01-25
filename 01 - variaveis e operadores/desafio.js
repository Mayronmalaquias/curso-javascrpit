const Preco_Combustivel = 5.79;
const gasto_medio = 10;
const distancia = 100;

const valor_gasto = (distancia / gasto_medio) * Preco_Combustivel;
console.log(valor_gasto.toFixed(2));