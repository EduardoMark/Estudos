// Cria uma função que retorna uma Promise
async function searchCep(cep) {
    // aguarda até que o fecth retorne o resultado da requisição HTTP
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json());
    console.log(result);
}

searchCep(70100000);