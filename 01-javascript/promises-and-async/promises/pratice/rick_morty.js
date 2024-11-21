const fetchApiRickAndMorty = id => {
    // função para fazer requisições HTTP
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json()) // transforma o corpo para JSON
        .then(data => console.log(data)) // exibe os dados 
}

fetchApiRickAndMorty(2)