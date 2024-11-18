function consultaProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produtos = {
                1: {nome: "Camisa", tamanho: "GG"},
                2: {nome: "Calca", tamanho: "40"},
                3: {nome: "Short", tamanho: "M"},
            }

            const produto = produtos[id];
    
            if (produto) {
                resolve(produto);
            } else {
                reject("Produto não encontrado.");
            }
        }, 1000);
    })
}

function consultaPreco(nomeProduto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const precos = {
                Camisa: 55,
                Calca: 110,
                Short: 70
            };

            const preco = precos[nomeProduto];

            if (preco) {
                resolve(preco);
            } else {
                reject("Preço não encontrado.");
            }
        }, 1000 * 2)
    })
}

consultaProduto(3).then(produto => {
    console.log(`Produto encontrado: ${produto.nome}`);
    return consultaPreco(produto.nome);
}).then(preco => {
    console.log(`Preço encontrado: R$${preco}`);
}).catch(err => {
    console.error(`Error: ${err}`);
})