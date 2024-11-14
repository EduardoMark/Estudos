/*
    São funções que recebem outra função como parâmetro
*/

// Exemplos de high order functions para manipulação de array

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// Map => retorna um novo array
const classes = personagens.map(function (personagem) {
    return personagem.classe;
})
console.log(classes);

// Filter => retorna um novo array
const nivelMenorQue30 = personagens.filter(function (personagem) {
    return personagem.nivel < 30;
})
console.log(nivelMenorQue30);

// Reduce => retorna um único item
const somaNiveis = personagens.reduce(function (accum, personagem) {
    return accum + personagem.nivel;
}, 0)
console.log(somaNiveis);

const racas = personagens.reduce(function (accum, personagem) {
    if (accum[personagem.raca]) {
        accum[personagem.raca].push(personagem)
    } else {
        accum[personagem.raca] = [personagem];
    }

    return accum;
}, {})

console.log(racas);

// ARRAY DE PRODUTOS
const produtos = [
    { id: 1, nome: "Celular", preco: 1500, categoria: "Eletrônicos" },
    { id: 2, nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
    { id: 3, nome: "Camiseta", preco: 50, categoria: "Vestuário" },
    { id: 4, nome: "Tênis", preco: 200, categoria: "Calçados" },
    { id: 5, nome: "Fone de Ouvido", preco: 100, categoria: "Eletrônicos" },
    { id: 6, nome: "Jaqueta", preco: 120, categoria: "Vestuário" },
    { id: 7, nome: "Relógio", preco: 250, categoria: "Acessórios" }
];

// ForEach => modifica o array original
produtos.forEach(function (produto) {
    produto.preco = (produto.preco * 1.1).toFixed(2);
})
console.log(produtos);

// Sort => modifica o array original 
produtos.sort(function (a, b) {
    return a.preco - b.preco;
})
console.log(produtos);
