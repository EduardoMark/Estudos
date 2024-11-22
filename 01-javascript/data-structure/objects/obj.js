/*
    Objetos: São estruturas de dados que permitem armazenar múltiplos valores em pares de chave-valor. Eles são amplamente utilizados para representar entidades mais complexas, como pessoas, produtos, etc.

    Como criar e acessar um objeto:
        - Podemos criar um objeto com a notação literal, usando chaves `{}`.
        - As propriedades são acessadas por meio de chaves ou ponto.
        - É possível adicionar, modificar ou deletar propriedades de objetos.

*/

// Exemplo de objeto simples
let pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};

console.log(pessoa.nome); // Acessa a propriedade 'nome'
console.log(pessoa["idade"]); // Acessa a propriedade 'idade' usando notação de colchetes

// Exemplo de adicionar ou modificar propriedades
pessoa.profissao = "Engenheira"; // Adiciona uma nova propriedade
pessoa.idade = 31; // Modifica a propriedade existente

console.log(pessoa.profissao); // Imprime 'Engenheira'
console.log(pessoa.idade); // Imprime '31'

// Exemplo de deletar uma propriedade
delete pessoa.cidade; // Deleta a propriedade 'cidade'
console.log(pessoa.cidade); // undefined, pois a propriedade foi deletada

// Exemplo de objeto com um método (função dentro de um objeto)
let carro = {
    modelo: "Fusca",
    cor: "azul",
    ano: 1969,
    descricao: function() {
        return `O carro é um ${this.modelo} de cor ${this.cor} do ano ${this.ano}.`;
    }
};

console.log(carro.descricao()); // Chama o método do objeto

// Exemplo de objeto aninhado (objeto dentro de objeto)
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    detalhes: {
        anoPublicacao: 1954,
        editora: "Allen & Unwin"
    }
};

console.log(livro.detalhes.anoPublicacao); // Acessa propriedade dentro de objeto aninhado
console.log(livro.detalhes["editora"]); // Outra forma de acessar

// Exemplo de objeto com valores dinâmicos
let chave = "pais";
let valor = "Brasil";

let pais = {};
pais[chave] = valor; // Usando variável como chave
console.log(pais.pais); // Imprime 'Brasil'
