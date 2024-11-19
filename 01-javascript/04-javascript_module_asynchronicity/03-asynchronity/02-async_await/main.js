/*
    async - declara uma função assíncrona
    await - para a execução da função até que a Promise seja resolvida

    await só pode ser usada dentro de uma função assíncrona
*/

async function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("arguments mus be of type number");
    }
    return a + b;
}

async function execute() {
    try {
        const result = await sum(17, 8);
        console.log(result);
        const result2 = await sum(17, null);
        console.log(result2);
    } catch (error) {
        console.error(error.message);
    }
}

execute()