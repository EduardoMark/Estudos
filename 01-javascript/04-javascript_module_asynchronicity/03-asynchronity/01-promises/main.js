function execute() {
    return new Promise((resolve, reject) => {
        console.log("Executando a promisse...");
        if (true) {
            console.log("Resolvendo a promisse.");
            resolve(17);
        } else {
            reject("Error ao tentar resolver a promisse")
        }
    })
}

execute().then(result => {
    console.log(`Promisse resolvida com sucesso: ${result}`);
}).catch(err => {
    console.error(`A promisse foi rejeitada: ${err}`);
}).finally(() => {
    console.log("Encerrando a operação.");
})