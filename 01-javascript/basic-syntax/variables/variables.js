/*
    Variáveis é um local para se armazenar dados, que podem ser usados e manipulados.

    DECLARAÇÕES:
    var => Uso não recomendado para navegadores atualmente, pode ter seu valor reatribuido, escopo de função.

    let => Uso mais recomendado, possui escopo de bloco, pode ter seu valor reatribuido.

    const => Uso mais recomendado para dados que não podem ser alterados, possui escopo de bloco.
*/

// Declaração usando 'var'
var nome = "João";
console.log(nome); // Saída: João
nome = "Maria"; // Reatribuição permitida
console.log(nome); // Saída: Maria

if (true) {
    var idade = 25; // Escopo de função
}
console.log(idade); // Saída: 25 (acessível fora do bloco)

// Declaração usando 'let'
let cidade = "São Paulo";
console.log(cidade); // Saída: São Paulo
cidade = "Rio de Janeiro"; // Reatribuição permitida
console.log(cidade); // Saída: Rio de Janeiro

if (true) {
    let pais = "Brasil"; // Escopo de bloco
    console.log(pais); // Saída: Brasil
}
// console.log(pais); // Erro: pais is not defined (fora do escopo de bloco)

// Declaração usando 'const'
const PI = 3.14159;
console.log(PI); // Saída: 3.14159
// PI = 3.14; // Erro: Assignment to constant variable