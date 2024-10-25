# Módulos 

## CommonJS

O CommonJs é o tipo de módulo padrão suportado pelo Node.js.

Utiliza-se ```module.exports = ("o que deseja exportar");``` para exportar algo.

Em outro arquivo utiliza ```const "nome desejado" = require('');```

## ESModules

O ESModules é um tipo de módulo adicionado recentemente no ES6, para utilizar no Node.js precisa alterar o tipo para module no arquivo package.json, adicione: ```"type": "module"```.

Para exportar algo podemos exportar usando a palavra-chave: ```export``` antes do que deseja exportar.

Ou ```export default``` para exportar apenas um item.