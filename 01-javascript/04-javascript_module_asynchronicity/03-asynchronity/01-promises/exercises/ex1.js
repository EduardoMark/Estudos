function buscaUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { name: "Eduardo", role: "admin" },
                2: { name: "John Doe", role: "user" }
            };
            const user = users[id];
            if (user) {
                resolve(user);
            } else {
                reject("Usuário não encontrado.")
            }
        }, 1000 * 2)
    })
}

buscaUsuario(2).then(user => {
    console.log(user);
}).catch(err => {
    console.log(`Promisse rejeitada: ${err}`);
}).finally(() => {
    console.log("Promisse finalizada");
})