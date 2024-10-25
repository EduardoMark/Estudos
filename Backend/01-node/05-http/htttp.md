# Módulo http 

Possibilita a criação de um servidor web, que permite que o Node.js transfira dados pelo Hyper Text Transfer Protocol (HTTP)

## Como importar o módulo

Para importar o módulo é da seguinte forma:
```javascript
const http = require('node:http');
```

## Criação básica de um server

```javascript
const server = http.createServer((req, res) => {
    const url = req.url; // extraindo a url da requisição

    // para possibilitar navegar entre as rotas
    switch (url) {
        case '/':
            res.writeHead(200); // envia o status da requisição no cabeçalho
            res.write(`Hello World`); // envia uma resposta
            break;
        case '/ge':
            res.writeHead(200);
            res.write(`Pagina do globo esporte`);
            break;
        case '/jn':
            res.writeHead(200);
            res.write(`Pagina do Jornal Nacional`);
            break;
        default:
            res.writeHead(400);
            res.write('NOT FOUND');
            break;
    }
    res.end(); // encerra a resposta
})

// cria uma porta para o servidor
const PORT = process.env.PORT || 3000;

// cria um ouvinte para o servidor pode funcionar
server.listen(PORT, () => {
    console.log(`Servidor ON: http://localhost:${PORT}`);
})
```