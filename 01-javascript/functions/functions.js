/*
    Funções: São blocos de código reutilizáveis que podem ser chamados para executar uma tarefa específica. Elas ajudam a organizar e modularizar o código.

    Tipos de funções:
        - Funções declaradas: São funções definidas com a palavra-chave `function` e podem ser chamadas em qualquer parte do código.
        - Funções expressas (ou anônimas): São funções atribuídas a variáveis, geralmente usadas como funções de callback.
        - Funções arrow (funções de seta): Sintaxe curta para escrever funções, utilizando a seta (`=>`).

*/

// Exemplo de função declarada
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("João")); // Chama a função e imprime "Olá, João!"

// Exemplo de função expressa
let soma = function(a, b) {
    return a + b;
};
console.log(soma(5, 3)); // Chama a função e imprime 8

// Exemplo de função arrow (função de seta)
let multiplicacao = (a, b) => a * b;
console.log(multiplicacao(4, 6)); // Chama a função e imprime 24

// Exemplo de função com valor padrão (parametro opcional)
function saudacaoComIdade(nome, idade = 18) {
    return `Olá, ${nome}! Você tem ${idade} anos.`;
}
console.log(saudacaoComIdade("Lucas")); // Usa o valor padrão de idade
console.log(saudacaoComIdade("Mariana", 22)); // Passa um valor para idade

// Exemplo de função com retorno e sem retorno
function semRetorno() {
    console.log("Esta função não retorna nada.");
}

function comRetorno() {
    return "Esta função retorna uma mensagem.";
}

semRetorno(); // Chama a função sem retorno
console.log(comRetorno()); // Chama a função com retorno e imprime a mensagem
