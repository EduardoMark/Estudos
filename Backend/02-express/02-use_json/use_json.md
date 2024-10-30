# Uso de JSON com Express

Como configurar e utilizar o JSON em uma API desenvolvida com o framework Express. JSON (JavaScript Object Notation) é um formato leve para intercâmbio de dados, amplamente utilizado para troca de informações entre o servidor e o cliente em APIs RESTful.

## O que é JSON?

JSON é um formato de dados baseado em texto, utilizado para estruturar dados em pares chave-valor. É um padrão de dados de fácil leitura por humanos e de fácil interpretação por máquinas. 

Exemplo de um objeto JSON:
```json
{
  "name": "João",
  "age": 25
}
```

## Configurando o Express para Trabalhar com JSON

```javascript
const express = require('express');
const app = express();

// Middleware para processar JSON
app.use(express.json());
```