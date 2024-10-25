const path = require('node:path');

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
