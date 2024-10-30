// importa o express
const express = require('express');

// cria uma instância de express 
const app = express();

// criando uma rota inicial
app.get('/', (req, res) => {
    res.send('Home Page.');
})

// criando a porta que o servidor irá operar
const PORT = process.env.PORT || 3000;

// inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor ON: http://localhost:${PORT}`);
})