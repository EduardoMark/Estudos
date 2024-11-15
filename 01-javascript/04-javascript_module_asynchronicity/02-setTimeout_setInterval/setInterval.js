console.log("Iniciando aplicação");

let seconds = 0;
const intervalId = setInterval(() => {
    seconds += 3;
    console.log(`Se passaram ${seconds} segundos.`);

    if (seconds >= 30) {
        clearInterval(intervalId);
        console.log("Intervalo encerrado...");
    }
}, 1000 * 3);

