# Módulo os (operational system) 

Ele fornece métodos e propriedades de utilitários relacionados ao sistema operacional.

## Como importar o módulo

Para importar o módulo é da seguinte forma:
```javascript
const os = require('node:os');
```

## Metódos

```javascript
// retorna a arquitetura da CPU do sistema operacionaç
console.log(os.arch());

// retorna um array de obj sobre cada núcleo da CPU
console.log(os.cpus());

// retorna a quantidade de mémoria livre do sistema em bytes
console.log(os.freemem());

// retorna em bytes a quantidade de mémoria que o sistema possui
console.log(os.totalmem());

// retorna o tempo de atividade do sistemta em segundos
console.log(os.uptime());
```