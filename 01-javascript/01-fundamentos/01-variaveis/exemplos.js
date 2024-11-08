/*
    Exemplos de var, let e const
*/

// Declarando variáveis no escopo global
var x = 10; // escopo global
let y = 20; // escopo global
const z = x + y; // escopo global (constante, não pode ser reatribuída)

if (true) {
    var a = "Hello"; // escopo de função (acessível fora do bloco if)
    let b = "World"; // escopo de bloco (acessível apenas dentro do if)
    const c = "sada"; // escopo de bloco (acessível apenas dentro do if)
}

// Função para mostrar escopo local
function functionScope() {
    var myScope = 99; // escopo local da função (não acessível fora da função)
}