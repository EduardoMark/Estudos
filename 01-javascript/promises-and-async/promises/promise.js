// Criando uma função que retorna uma Promise
function myPromise(num1, num2) {
    // Criando uma Promise
    return new Promise((resolve, reject) => {
        // Simulando a execução de algo demorado
        setTimeout(() => {
            if (typeof num1 !== 'number' || typeof num2 !== 'number') {
                // reject => retorna uma "falha" na Promise
                return reject('The arguments must be of the type number.');
            }
            // resolve => retorna um "sucesso" na Promise
            resolve(`The sum of ${num1} and ${num2} is: ${num1 + num2} `);
        }, 1000)
    })
}

// Testando 
myPromise(17, 8)
    .then(result => console.log(result)) // executado quando a Promise é resolvida
    .catch(reason => console.log(reason)) // executado quando a Promise é rejeitada, ou haja algum erro no .then

myPromise(undefined, 99)
    .then(result => console.log(result))
    .catch(reason => console.log(reason))

myPromise(45, 55)
    .then(result => console.log(result))
    .catch(reason => console.log(reason))
    .finally(() => console.log("Completed operation")) // sempre executado independente de erro ou não

