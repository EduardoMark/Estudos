/*
    É um bloco de código que executa um determinado procedimento, sendo executado somente quando é chamado/invocado, podendo ser reutilizado.
*/

// função básica, sem parâmetro e sem retorno
function sayHello() {
    console.log("Hello World");
}
sayHello(); // chamando a função

// função com parâmetro
function thanksForPeople(name) {
    console.log(`Muito obrigado, ${name}`);
}
thanksForPeople("John Doe");

// função com retorno
function addition(x, y) {
    return x + y;
}
console.log(addition(17, 25));

// Funções podem ter parâmetros padrões
// Parâmetros e Retornos são opcionais em funções