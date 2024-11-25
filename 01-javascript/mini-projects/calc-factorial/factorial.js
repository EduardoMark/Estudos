/*
    Objetivo: Criar um programa que calcule o fatorial de um número dado.

    Tecnologias: Apenas JavaScript.
    
    Desafio: Trabalhar com loops e recursão para calcular o fatorial de um número.
*/

function calcFactorial(n) {
    if (n === 0 || n === 1) return 1
    return n * calcFactorial(n - 1);
}

console.log(calcFactorial(4))