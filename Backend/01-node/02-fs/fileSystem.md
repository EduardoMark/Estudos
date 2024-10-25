# Móodulo fs do Node.js

## Importação

Para importar o módulo fs, fazemos o seguinte passo:
```javascript
const fs = require("node:fs");
```

## READ (ler)

Para ler um arquivo utiliza-se o método ```fs.readFile();```
## CREATE (criar)

Dois métodos para criar um arquivo.

1. ```fs.appendFile();```
    * Adiciona o conteúdo no arquivo, se o arquivo não existir ele cria o arquivo.

2. ```fs.writeFile();```
    * Substitui o arquivo e o conteúdo especificados, se existirem. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado

## UPDATE (atualizar)

1. ```fs.appendFile();```
    * Adiciona o conteúdo no final do arquivo.

2. ```fs.writeFile();```
    * Substitui o arquivo e o conteúdo especificados.

## DELETE (excluir)

Para excluir o arquivo utiliza o metódo ```fs.unlink();```

## RENAME (renomear)

Para renomear o arquivo utiliza-se o metódo ```fs.rename();```