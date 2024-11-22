/*
    Condicionais: São estruturas usadas para tomar decisões no código com base em condições.

    Tipos de condicionais:
        - if: Executa um bloco de código se a condição for verdadeira.
        - if-else: Executa um bloco de código se a condição for verdadeira e outro se for falsa.
        - if-else if-else: Avalia várias condições em sequência.
        - switch: Escolhe um bloco de código para executar com base em diferentes valores.
        - Operador ternário: Uma forma curta para if-else.
*/

// Exemplo de if
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}

// Exemplo de if-else
let temperatura = 30;
if (temperatura > 25) {
    console.log("Está calor.");
} else {
    console.log("Está fresco.");
}

// Exemplo de if-else if-else
let nota = 85;
if (nota >= 90) {
    console.log("Conceito: A");
} else if (nota >= 70) {
    console.log("Conceito: B");
} else if (nota >= 50) {
    console.log("Conceito: C");
} else {
    console.log("Conceito: D");
}

// Exemplo de switch
let diaSemana = 4; // 1: Domingo, 2: Segunda, ..., 7: Sábado
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido.");
}

// Exemplo de operador ternário
let saldo = 100;
let mensagem = saldo >= 0 ? "Saldo positivo" : "Saldo negativo";
console.log(mensagem);