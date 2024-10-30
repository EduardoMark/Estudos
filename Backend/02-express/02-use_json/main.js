// importa o express
const express = require('express');

// cria uma instância de express 
const app = express();

// adicionando middleware para trabalhar com json
app.use(express.json());

const users = []; // armazena usuários

// criando uma rota inicial
app.get('/', (req, res) => {
    res.status(200); // retornando o status http
    res.json({ message: "Página inical" }); // retornando um json
})

// criando uma rota para cadastro
app.post('/users', (req, res) => {
    // pegando os dados name e age do objeto body da req
    const { name, age } = req.body;
    const user = {name, age};
    users.push(user);

    // retornando o status da req e o json
    res.status(201).json({message: "Usuário cadastrado com sucesso.", user});
})

// criando a porta que o servidor irá operar
const PORT = process.env.PORT || 8080;

// inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor ON: http://localhost:${PORT}`);
})