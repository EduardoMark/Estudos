function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sou uma função assíncrona");
        }, 1000 * 2)
    })
}

// async => declara que essa função sempre retorna uma promessa
async function teste() {
    // await => espera até que a Promise seja resolvida e retorna seu resultado
    const resultado = await f1();
    console.log(resultado);
}

teste();