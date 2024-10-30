# Servidor Básico com Express

Exemplo de como criar um servidor básico usando o framework Express, que facilita o desenvolvimento de servidores web em Node.js.

## O que é o Express?

Express é um framework para Node.js. Ele oferece uma série de funcionalidades essenciais para criar servidores HTTP e APIs RESTful, como roteamento, middleware, gerenciamento de erros e muito mais. Com ele, podemos estruturar o fluxo das requisições de forma mais organizada.

## Passo a Passo para Criar um Servidor Básico

### 1. Inicializando o Projeto

Primeiro, crie uma nova pasta para o projeto e inicialize o Node.js:

```bash
mkdir basic_server
cd basic_server
npm init -y
```

### 2. Instale o express

```bash
npm install express
```

### 3. Crie um arquivo main.js para configurar o express

```javascript
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
```

### 4. Execute o servidor

```bash
node main.js
```