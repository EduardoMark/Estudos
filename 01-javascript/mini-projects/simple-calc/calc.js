/*
    Objetivo: Criar uma calculadora simples que permita realizar operações matemáticas como soma, subtração, multiplicação e divisão.

    Tecnologias: Apenas JavaScript.

    Desafio: Lidar com entradas de números e operações, implementando o controle de fluxo para realizar os cálculos corretos.
*/

function arithmeticCalculator(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return `O argumento deve ser do tipo number`;

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) return "Não é possível dividir por zero!"
            return num1 / num2;
        default:
            return `Operador "${operator}" não permitido! Use +, -, * ou /.`;

    }
}

try {
    console.log(arithmeticCalculator(17, 8, '+'));
    console.log(arithmeticCalculator(45, 99, '-'));
    console.log(arithmeticCalculator(9, 9, '*'));
    console.log(arithmeticCalculator(100, 0, '/'));
    console.log(arithmeticCalculator(4, 3, '.'));
    console.log(arithmeticCalculator(4, undefined, '-'));
} catch (error) {
    console.error(error.message);
}