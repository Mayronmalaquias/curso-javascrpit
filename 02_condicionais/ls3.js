const preco_normal = 100;
const escolha_pagamento = 2;
const quantidade_de_pacelas = 5;

if (escolha_pagamento === 1) {
    const desconto = preco_normal * 0.1;
    const valor_total = preco_normal - desconto;
    console.log('Desconto de:', desconto.toFixed(2));
    console.log('Valor total:', valor_total.toFixed(2));
} else if (escolha_pagamento === 2) {
    const desconto = preco_normal * 0.15;
    const valor_total = preco_normal - desconto;
    console.log('Desconto de:', desconto.toFixed(2));
    console.log('Valor total:', valor_total.toFixed(2));
} else if (escolha_pagamento === 3) {
    const valor_parcelado = preco_normal / 2;
    console.log('Valor parcelado:', valor_parcelado.toFixed(2));
    console.log('Valor total:', preco_normal.toFixed(2));
} else {
    const valor_total = preco_normal + (preco_normal * 0.1);
    const valor_parcelado = valor_total / quantidade_de_pacelas;
    console.log('Valor parcelado:', valor_parcelado.toFixed(2));
    console.log('Valor Total:', valor_total.toFixed(2));
}