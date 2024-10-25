const fs = require('node:fs');

fs.rename('./log.txt', './arquivo.txt', err => {
    if (err) {
        console.error("erro ao tentar renomear o arquivo");
        return;
    }
})