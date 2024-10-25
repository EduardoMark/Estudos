# Módulo path 

Ele oferece funções para manipular, unir, separar e normalizar caminhos, tornando mais fácil lidar com as diferentes convenções de sistemas operacionais (Windows, Linux, macOS, etc.).

## Como importar o módulo

Para importar o módulo é da seguinte forma:
```javascript
const path = require('node:path');
```

## Metódos

```javascript
// retorna o caminho do diretório atual
console.log(__dirname); 

// retorna o caminho do arquivo atual
console.log(__filename);

// retorna a última parte do caminho
console.log(path.basename(__filename)); // podendo ainda tirar a extensão caso tiver

// similar ao __dirname, ele retorna o caminho até o arquivo
console.log(path.dirname(__filename));

// retorna a extensão do arquivo
console.log(path.extname(__filename));

// une todas as partes passadas e retorna um caminho
console.log(path.join('./arquivos', 'pdfs', 'log.pdf'));

// retorna um objeto cujas propriedades representam elementos significativos do path.
console.log(path.parse(__dirname));
```