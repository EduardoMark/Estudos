const fetchApiCountries = () => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json()) // Transforma o conteúdo para JSON
        .then(data => console.log(data.map(data => data?.name?.common))) // Exibe o nome dos países
        .catch(error => console.error(`Erro ao buscar os países: ${error}`)) // Exibe uma mensagem de erro
}

fetchApiCountries(); // Executa a função
