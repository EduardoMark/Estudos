/*
    Arrays: São listas ordenadas de elementos, que podem ser de qualquer tipo de dado. Os arrays são usados para armazenar múltiplos valores em uma única variável e podem ser manipulados de diversas maneiras.

    Como criar e acessar um array:
        - Podemos criar um array com a notação de colchetes `[]`.
        - Podemos acessar os elementos de um array usando seu índice, que começa em 0.
        - Arrays podem ser manipulados com diversos métodos embutidos, como `push()`, `pop()`, `shift()`, `unshift()`, entre outros.

*/

// Exemplo de array simples
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // Acessa o primeiro elemento: 'maçã'
console.log(frutas[2]); // Acessa o terceiro elemento: 'laranja'

// Exemplo de adicionar elementos no final do array
frutas.push("manga");
console.log(frutas); // ['maçã', 'banana', 'laranja', 'manga']

// Exemplo de remover o último elemento do array
frutas.pop();
console.log(frutas); // ['maçã', 'banana', 'laranja'], o 'manga' foi removido

// Exemplo de adicionar elementos no começo do array
frutas.unshift("morango");
console.log(frutas); // ['morango', 'maçã', 'banana', 'laranja']

// Exemplo de remover o primeiro elemento do array
frutas.shift();
console.log(frutas); // ['maçã', 'banana', 'laranja'], 'morango' foi removido

// Exemplo de percorrer um array com for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Imprime cada fruta no array
}

// Exemplo de percorrer um array com for-of (mais simples)
for (let fruta of frutas) {
    console.log(fruta); // Imprime cada fruta no array
}

// Exemplo de encontrar o índice de um elemento
let indice = frutas.indexOf("banana");
console.log(indice); // Imprime 1, que é o índice de 'banana'

// Exemplo de verificar se um elemento existe no array
let existe = frutas.includes("laranja");
console.log(existe); // true, pois 'laranja' está no array

// Exemplo de manipulação de arrays com slice (cria um novo array)
let frutasSelecionadas = frutas.slice(1, 3); // Pega elementos do índice 1 até o 2
console.log(frutasSelecionadas); // ['banana', 'laranja']

// Exemplo de manipulação de arrays com splice (altera o array original)
frutas.splice(1, 1, "pêssego"); // Substitui 'banana' por 'pêssego'
console.log(frutas); // ['maçã', 'pêssego', 'laranja']

// Exemplo de array multidimensional
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[1][2]); // Imprime 6 (elemento da segunda linha e terceira coluna)
