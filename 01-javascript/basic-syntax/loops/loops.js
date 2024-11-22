/*
    Loops: São estruturas de repetição que permitem executar um bloco de código múltiplas vezes com base em uma condição.

    Tipos de loops:
        - for: Executa um bloco de código um número determinado de vezes.
        - while: Executa um bloco de código enquanto uma condição for verdadeira.
        - do-while: Executa um bloco de código pelo menos uma vez e, em seguida, continua enquanto a condição for verdadeira.
        - for-in: Itera sobre as propriedades de um objeto.
        - for-of: Itera sobre os elementos de um array ou objetos iteráveis.

*/

// Exemplo de for
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Imprime os elementos do array
}

// Exemplo de while
let contador = 0;
while (contador < 5) {
    console.log(contador); // Imprime de 0 a 4
    contador++;
}

// Exemplo de do-while
let numero = 1;
do {
    console.log(numero); // Imprime 1
    numero++;
} while (numero <= 1); // Condição é verificada após a primeira execução

// Exemplo de for-in (Iterando sobre as propriedades de um objeto)
let pessoa = { nome: "Maria", idade: 30, cidade: "São Paulo" };
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]); // Exibe as chaves e valores do objeto
}

// Exemplo de for-of (Iterando sobre os elementos de um array)
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log(fruta); // Exibe cada fruta no array
}
