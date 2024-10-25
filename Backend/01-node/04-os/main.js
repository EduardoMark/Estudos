const os = require('node:os');

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

