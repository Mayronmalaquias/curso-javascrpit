function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}


function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}


(function(){
    const preco_normal = 100;
    const escolha_pagamento = 1;

    if (escolha_pagamento === 1) {
        console.log(aplicarDesconto(preco_normal, 10))
    } else if (escolha_pagamento === 2) {
        console.log(aplicarDesconto(preco_normal, 15))
    } else if (escolha_pagamento === 3) {
        console.log(preco_normal)
    } else {
        console.log(aplicarJuros(preco_normal, 10))
    }
})()