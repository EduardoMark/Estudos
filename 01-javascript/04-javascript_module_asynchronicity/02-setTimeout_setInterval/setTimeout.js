console.log("Iniciando aplicação");

setTimeout(() => {
    console.log("Bloco executado após 5 segundos.");
}, 1000 * 5)

console.log("Sou executado primeiro.");

setTimeout(() => {
    console.log("Executado após 2 segundos.");
}, 1000 * 2);